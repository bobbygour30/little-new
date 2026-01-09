import { useEffect, useState } from "react";
import axios from "axios";
import { Trash2, Upload, Image as ImageIcon } from "lucide-react";

export default function AdminDashboard() {
  const [images, setImages] = useState([]);
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [title, setTitle] = useState("");
  const [uploading, setUploading] = useState(false);

  const token = localStorage.getItem("token");
  const API_URL = import.meta.env.VITE_API_URL;


  const fetchImages = async () => {
    const res = await axios.get(`${API_URL}/api/gallery`);
    setImages(res.data);
  };

  const handleFileSelect = e => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
    setPreviews(selectedFiles.map(file => URL.createObjectURL(file)));
  };

  const handleUpload = async () => {
    if (!files.length || !title) {
      alert("Select images and enter title");
      return;
    }

    setUploading(true);

    try {
      for (let file of files) {
        const reader = new FileReader();

        await new Promise(resolve => {
          reader.onloadend = async () => {
            await axios.post(
              `${API_URL}/api/gallery/upload`,
              { image: reader.result, title },
              { headers: { Authorization: `Bearer ${token}` } }
            );
            resolve();
          };
          reader.readAsDataURL(file);
        });
      }

      setFiles([]);
      setPreviews([]);
      setTitle("");
      fetchImages();
    } catch {
      alert("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const deleteImage = async id => {
    if (!confirm("Delete this image?")) return;

    await axios.delete(`${API_URL}/api/gallery/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchImages();
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF6F2] to-[#FFFDF7] px-6 py-24 mt-20">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-extrabold text-[#4764c7] mb-10">
          Gallery Admin Dashboard
        </h1>

        {/* UPLOAD CARD */}
        <div className="bg-white rounded-3xl shadow-lg p-6 mb-14 max-w-2xl">
          <h2 className="text-xl font-bold mb-4">Upload Images</h2>

          <input
            type="text"
            placeholder="Enter class / image title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="w-full mb-4 p-3 border rounded-xl"
          />

          <label className="cursor-pointer inline-flex items-center gap-3 bg-[#4764c7] text-white px-6 py-3 rounded-full font-semibold">
            <ImageIcon size={20} />
            Select Images
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileSelect}
              hidden
            />
          </label>

          {/* PREVIEWS */}
          {previews.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
              {previews.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  className="h-32 w-full object-cover rounded-lg shadow"
                />
              ))}
            </div>
          )}

          <button
            onClick={handleUpload}
            disabled={uploading}
            className="mt-6 w-full bg-green-600 text-white py-3 rounded-xl font-semibold disabled:opacity-50"
          >
            {uploading ? "Uploading..." : "Upload Images"}
          </button>
        </div>

        {/* GALLERY GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {images.map(img => (
            <div
              key={img._id}
              className="bg-white rounded-2xl shadow overflow-hidden"
            >
              <img
                src={img.url}
                className="h-56 w-full object-cover"
              />

              <div className="p-4 flex items-center justify-between">
                <p className="font-semibold text-gray-800">{img.title}</p>
                <button
                  onClick={() => deleteImage(img._id)}
                  className="text-red-500"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

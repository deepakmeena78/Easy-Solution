import { useState } from "react";

function CreateHelp() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    help_seeker: "",
    category: "",
    location: "",
    pincode: "",
    status: "",
    help_date: "",
    gallery: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const filePaths = files.map(file => URL.createObjectURL(file));
    setFormData({ ...formData, gallery: filePaths });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg text-center">
      <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-2 gap-6 text-left">
        {[ 
          { label: "Title", name: "title" },
          { label: "Description", name: "description" },
          { label: "Help Seeker", name: "help_seeker" },
          { label: "Location", name: "location" },
          { label: "Pincode", name: "pincode" },
          { label: "Status", name: "status" },
          { label: "Help Date", name: "help_date", type: "date" }
        ].map(({ label, name, type = "text" }) => (
          <div key={name} className="relative w-full">
            <input
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded focus:border-blue-500 outline-none peer"
              placeholder=" "
            />
            <label
              className="absolute left-3 top-3 text-gray-600 text-sm transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-500"
            >
              {label}
            </label>
          </div>
        ))}

        <div className="relative w-full">
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded focus:border-blue-500 outline-none bg-transparent appearance-none"
          >
            <option value="" disabled hidden></option>
            <option value="Education">Education</option>
            <option value="Health">Health</option>
            <option value="Technology">Technology</option>
            <option value="Finance">Finance</option>
          </select>
          <div className="absolute right-3 top-4 pointer-events-none">
            ▼
          </div>
          <label
            className="absolute left-3 top-3 text-gray-600 text-sm transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-500"
          >
            Category
          </label>
        </div>

        <div className="col-span-2 w-full">
          <label className="text-gray-600">Upload Images</label>
          <input type="file" multiple onChange={handleFileChange} className="w-full p-3 border border-gray-300 rounded focus:border-blue-500 outline-none" />
          <div className="flex mt-2 space-x-2">
            {formData.gallery.map((src, index) => (
              <img key={index} src={src} alt="Uploaded" className="w-16 h-16 object-cover rounded" />
            ))}
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateHelp;

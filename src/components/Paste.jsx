import { Calendar, Copy, Eye, PencilLine, Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { removeFromPastes } from "../redux/pasteSlice";
import { FormatDate } from "../utlis/formatDate";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = (id) => {
    dispatch(removeFromPastes(id));
  };

  const filteredPastes = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full py-10 max-w-[900px] mx-auto px-5">

      {/* Search */}
      <div className="w-full mb-8">
        <input
          type="search"
          placeholder="Search pastes..."
          className="w-full bg-black border border-neutral-800 rounded-md px-4 py-2 text-sm text-neutral-300 outline-none focus:border-neutral-600"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Heading */}
      <h2 className="text-lg text-neutral-300 mb-6">All Pastes</h2>

      {/* List */}
      <div className="flex flex-col gap-4">

        {filteredPastes.length > 0 ? (
          filteredPastes.map((paste) => (

            <div
              key={paste._id}
              className="flex justify-between items-start border border-neutral-800 rounded-lg p-4 hover:border-neutral-700 transition"
            >

              {/* Left */}
              <div className="flex flex-col gap-2 max-w-[65%]">

                <p className="text-neutral-200 text-sm font-medium">
                  {paste.title}
                </p>

                <p className="text-neutral-500 text-xs line-clamp-2">
                  {paste.content}
                </p>

                <div className="flex items-center gap-2 text-xs text-neutral-500 mt-1">
                  <Calendar size={14} />
                  {FormatDate(paste.createdAt)}
                </div>

              </div>

              {/* Right icons */}
              <div className="flex gap-3 text-neutral-400">

                <a href={`/?pasteId=${paste._id}`} className="hover:text-white">
                  <PencilLine size={18} />
                </a>

                <button
                  onClick={() => handleDelete(paste._id)}
                  className="hover:text-red-400"
                >
                  <Trash2 size={18} />
                </button>

                <a
                  href={`/pastes/${paste._id}`}
                  target="_blank"
                  className="hover:text-neutral-200"
                >
                  <Eye size={18} />
                </a>

                <button
                  onClick={() => {
                    navigator.clipboard.writeText(paste.content);
                    toast.success("Copied");
                  }}
                  className="hover:text-neutral-200"
                >
                  <Copy size={18} />
                </button>

              </div>
            </div>

          ))
        ) : (
          <div className="text-center text-neutral-500 text-sm py-10">
            No pastes found
          </div>
        )}

      </div>
    </div>
  );
};

export default Paste;
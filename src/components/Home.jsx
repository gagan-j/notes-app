import { Copy, PlusCircle } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addToPastes, updatePastes } from "../redux/pasteSlice";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");

  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();

  const createPaste = () => {
    const paste = {
      title: title,
      content: value,
      _id:
        pasteId ||
        Date.now().toString(36) + Math.random().toString(36).substring(2),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      dispatch(updatePastes(paste));
    } else {
      dispatch(addToPastes(paste));
    }

    setTitle("");
    setValue("");
    setSearchParams({});
  };

  const resetPaste = () => {
    setTitle("");
    setValue("");
    setSearchParams({});
  };

  useEffect(() => {
    if (pasteId) {
      const paste = pastes.find((p) => p._id === pasteId);
      if (paste) {
        setTitle(paste.title);
        setValue(paste.content);
      }
    }
  }, [pasteId, pastes]);

  return (
    <div className="w-full min-h-screen bg-black py-10 max-w-[1200px] mx-auto px-5 lg:px-0">
      <div className="flex flex-col gap-y-5 items-start">

        {/* Title + Buttons */}
        <div className="w-full flex flex-row gap-x-4 justify-between items-center">

          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`${pasteId ? "w-[80%]" : "w-[85%]"} 
            bg-black 
            text-gray-300 
            border border-gray-800 
            rounded-md 
            p-2 
            outline-none`}
          />

          <button
            className="text-gray-200 bg-neutral-800 hover:bg-neutral-700 transition rounded-lg text-sm px-5 py-2"
            onClick={createPaste}
          >
            {pasteId ? "Update Paste" : "Create My Paste"}
          </button>

          {pasteId && (
            <button
              className="text-gray-200 bg-neutral-800 hover:bg-neutral-700 transition rounded-lg text-sm px-4 py-2"
              onClick={resetPaste}
            >
              <PlusCircle size={20} />
            </button>
          )}
        </div>

        {/* Editor */}
        <div className="w-full flex flex-col rounded-xl bg-black border border-gray-800">

          {/* Header */}
          <div className="w-full rounded-t-xl flex items-center justify-between px-4 py-2 bg-[#2a2a2a] border-b border-gray-800">

            {/* Mac circles */}
            <div className="flex gap-x-[6px] items-center select-none">
              <div className="w-[13px] h-[13px] rounded-full bg-[rgb(255,95,87)]" />
              <div className="w-[13px] h-[13px] rounded-full bg-[rgb(254,188,46)]" />
              <div className="w-[13px] h-[13px] rounded-full bg-[rgb(45,200,66)]" />
            </div>

            {/* Copy button */}
            <button
              className="text-gray-400 hover:text-white transition"
              onClick={() => {
                navigator.clipboard.writeText(value);
                toast.success("Copied to Clipboard", {
                  position: "top-right",
                });
              }}
            >
              <Copy size={20} />
            </button>
          </div>

          {/* Textarea */}
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Write Your Content Here...."
            rows={20}
            className="w-full p-4 bg-black text-gray-200 font-mono outline-none resize-none"
            style={{
              caretColor: "#fff",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
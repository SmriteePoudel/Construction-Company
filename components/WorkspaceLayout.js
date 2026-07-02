"use client";
import { useState } from "react";

export default function WorkspaceLayout() {
  // Placeholder for pages; in a real app, fetch from API
  const [pages] = useState([
    { id: "1", title: "Welcome" },
    { id: "2", title: "Quick Notes" },
    { id: "3", title: "To-Do List" },
  ]);
  const [selectedPage, setSelectedPage] = useState(pages[0]);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 p-4 flex flex-col">
        <h1 className="text-2xl font-bold mb-8 tracking-tight">Workspace</h1>
        <nav className="flex-1">
          <ul className="space-y-2">
            {pages.map((page) => (
              <li key={page.id}>
                <button
                  className={`w-full text-left px-3 py-2 rounded hover:bg-neutral-100 transition font-medium ${
                    selectedPage.id === page.id ? "bg-neutral-200" : ""
                  }`}
                  onClick={() => setSelectedPage(page)}
                >
                  {page.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <button className="mt-8 px-4 py-2 bg-black text-white rounded hover:bg-neutral-800 transition font-semibold">
          + New Page
        </button>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-10 bg-neutral-50">
        <h2 className="text-3xl font-bold mb-4">{selectedPage.title}</h2>
        <div className="text-lg text-neutral-700">
          {selectedPage.id === "1" && (
            <>
              <p>Welcome to your new productivity workspace! 🎉</p>
              <p className="mt-2">
                Create pages, take notes, and organize your hustle work
                efficiently.
              </p>
            </>
          )}
          {selectedPage.id === "2" && <p>Jot down your quick notes here.</p>}
          {selectedPage.id === "3" && (
            <p>Manage your to-do list and stay productive!</p>
          )}
        </div>
      </main>
    </div>
  );
}

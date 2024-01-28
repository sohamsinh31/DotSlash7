// Sidebar.tsx
import React, { useState } from 'react';
import './Sidebar.css'; // Make sure the path to your CSS file is correct

// links.json
const linkData = {
  "menu": [
    {
      "label": "Chapter 1",
      "links": [
        { "label": "Introduction", "url": "/chapter1" },
        { "label": "Code Snippet", "url": "/chapter2" },
        { "label": "Data Types", "url": "/chapter3" }
      ],
    },
    {
      "label": "Chapter 2",
      "links": [
        { "label": "Introduction", "url": "/chapter1" },
        { "label": "Code Snippet", "url": "/chapter2" },
        { "label": "Data Types", "url": "/chapter3" }
      ],
    },
    {
      "label": "Chapter 3",
      "links": [
        { "label": "Introduction", "url": "/chapter1" },
        { "label": "Code Snippet", "url": "/chapter2" },
        { "label": "Data Types", "url": "/chapter3" }
      ],
    },
    {
      "label": "Chapter 4",
      "links": [
        { "label": "Introduction", "url": "/chapter1" },
        { "label": "Code Snippet", "url": "/chapter2" },
        { "label": "Data Types", "url": "/chapter3" }
      ],
    },
  ]
}

interface SidebarProps {}

export const Sidebar: React.FC<SidebarProps> = () => {
  const [openDropdowns, setOpenDropdowns] = useState<number[]>([]);

  const toggleDropdown = (index: number) => {
    if (openDropdowns.includes(index)) {
      setOpenDropdowns(openDropdowns.filter((item) => item !== index));
    } else {
      setOpenDropdowns([...openDropdowns, index]);
    }
  };

  return (
    <div className="sidebar">
      <h2>Introduction to C</h2>
      {linkData.menu.map((item, index) => (
        <div key={index} className={`dropdown ${openDropdowns.includes(index) ? 'open' : ''}`}>
          <button className="dropbtn" onClick={() => toggleDropdown(index)}>
            <h3>{item.label}</h3> <i className={`fa fa-caret-${openDropdowns.includes(index) ? 'up' : 'down'}`}></i>
          </button>
          {item.links && (
            <div className="dropdown-content">
              {item.links.map((link, linkIndex) => (
                <a href={link.url} key={linkIndex}>
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

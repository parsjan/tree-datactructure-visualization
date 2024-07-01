'use client'
import React, { useState } from 'react';
import "../styles/tree.css";

const TreeNode = ({ level, currentLevel }) => {
  return (
    <div className="node">
      <div className="node-label">Level {currentLevel}</div>
      <input  type="text" placeholder="1" className="node-input" />
      {level > 0 && (
        <div className="child-container">
          <div className="line line-left"></div>
          <TreeNode level={level - 1} currentLevel={currentLevel + 1} />
          <TreeNode level={level - 1} currentLevel={currentLevel + 1} />
          <div className="line line-right"></div>
        </div>
      )}
    </div>
  );
};

const Treepage = () => {
  const [nodes, setNodes] = useState(1);

  return (
    <div className="tree-container">
      <label>
        Number of Levels:
        <input
          type="number"
          value={nodes}
          onChange={(e) => setNodes(Number(e.target.value))}
          min="1"
          max="10000"
          className="level-input"
        />
      </label>
      <div className="tree-wrapper">
        <TreeNode level={nodes - 1} currentLevel={1} />
      </div>
    </div>
  );
};

export default Treepage;

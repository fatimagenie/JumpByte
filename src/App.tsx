/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from 'react';

// Game Constants
const BOARD_WIDTH = 750;
const BOARD_HEIGHT = 250;

export default function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Board variables (will be stored in refs for the game loop)
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Initialize board
    canvas.width = BOARD_WIDTH;
    canvas.height = BOARD_HEIGHT;
    const context = canvas.getContext('2d');
    if (!context) return;
    contextRef.current = context;

    // Initial draw
    drawPlaceholder();

    // Handle window resize if needed (though we have fixed size)
    console.log("Game Board Initialized: 750x250");
  }, []);

  const drawPlaceholder = () => {
    const ctx = contextRef.current;
    if (!ctx) return;

    // Clear board
    ctx.clearRect(0, 0, BOARD_WIDTH, BOARD_HEIGHT);

    // Draw Ground Line
    ctx.strokeStyle = "#535353";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, BOARD_HEIGHT - 20);
    ctx.lineTo(BOARD_WIDTH, BOARD_HEIGHT - 20);
    ctx.stroke();

    // Draw "Press Space to Start" text
    ctx.fillStyle = "#535353";
    ctx.font = "20px 'Courier New'";
    ctx.textAlign = "center";
    ctx.fillText("Dino Run: Basic Setup Ready", BOARD_WIDTH / 2, BOARD_HEIGHT / 2);
    ctx.font = "14px 'Courier New'";
    ctx.fillText("Canvas ID: 'board' | Size: 750x250", BOARD_WIDTH / 2, BOARD_HEIGHT / 2 + 30);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-3xl font-bold text-[#535353] mb-4">Dino Run</h1>
      <canvas 
        id="board" 
        ref={canvasRef}
        className="rounded-lg"
      />
      <p className="text-sm text-gray-500 mt-2">
        Expert Setup: React + Canvas API
      </p>
    </div>
  );
}

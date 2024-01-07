import React from "react";
function Loading() {
  return (
    <div class="loader-container fixed inset-0 grid" id="preloader">
      <svg viewBox="'0 0 400 160" class="text">
        <text x="50%" y="50%" dy=".32em" text-anchor="middle" class="text-body">
          GDUConnect
        </text>
        <text
          x="50%"
          y="50%"
          dy=".32em"
          dx="3.3em"
          text-anchor="middle"
          class="text-body"
        >
          .
        </text>
      </svg>
    </div>
  );
}

export default Loading;

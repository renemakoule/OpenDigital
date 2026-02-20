const CameroonFlag = () => (
  <svg
    viewBox="0 0 900 600"
    className="w-6 h-4 rounded-[2px] shadow-sm"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Bande Verte */}
    <rect width="300" height="600" fill="#007a5e" />
    {/* Bande Rouge */}
    <rect width="300" height="600" x="300" fill="#ce1126" />
    {/* Bande Jaune */}
    <rect width="300" height="600" x="600" fill="#fcd116" />
    {/* Étoile Jaune emblématique au centre de la bande rouge */}
    <path
      fill="#fcd116"
      d="M450 248l34.8 107.2H597.5L506.4 421.5l34.8 107.2L450 462.4l-91.2 66.3 34.8-107.2-91.1-66.3H415.2z"
    />
  </svg>
);

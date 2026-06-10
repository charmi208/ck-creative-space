const motifs = ['spark', 'grid', 'cursor', 'loop', 'flower', 'spark', 'stamp', 'grid'];

export default function SideRails() {
  return (
    <>
      <div className="side-rail side-rail-left" aria-hidden="true">
        {Array.from({ length: 28 }).map((_, index) => (
          <Stamp key={index} motif={motifs[index % motifs.length]} />
        ))}
      </div>
      <div className="side-rail side-rail-right" aria-hidden="true">
        {Array.from({ length: 28 }).map((_, index) => (
          <Stamp key={index} motif={motifs[(index + 3) % motifs.length]} />
        ))}
      </div>
    </>
  );
}

function Stamp({ motif }: { motif: string }) {
  return (
    <span className="stamp">
      {motif === 'spark' && (
        <svg viewBox="0 0 24 24">
          <path d="M12 3l2.3 6.2L21 12l-6.7 2.8L12 21l-2.3-6.2L3 12l6.7-2.8z" />
          <path d="M5 5l3 3M19 5l-3 3M5 19l3-3M19 19l-3-3" />
        </svg>
      )}
      {motif === 'grid' && (
        <svg viewBox="0 0 24 24">
          <path d="M4 4h16v16H4z" />
          <path d="M4 10h16M4 15h16M10 4v16M15 4v16" />
        </svg>
      )}
      {motif === 'cursor' && (
        <svg viewBox="0 0 24 24">
          <path d="M6 4l12 8-6 1.2L9.5 19z" />
        </svg>
      )}
      {motif === 'loop' && (
        <svg viewBox="0 0 24 24">
          <path d="M5 13c2.5-8 13-8 14-1 .7 5.1-6.5 8-11 4-3.5-3.1 0-8.8 4.8-6.2 3 1.6 1.8 5.4-1.2 5.2" />
        </svg>
      )}
      {motif === 'flower' && (
        <svg viewBox="0 0 24 24">
          <path d="M12 13c4-2 5-7 1.5-8.5C10 3 8.2 8.2 12 13z" />
          <path d="M12 13c-4-2-5-7-1.5-8.5C14 3 15.8 8.2 12 13z" transform="rotate(72 12 12)" />
          <path d="M12 13c-4-2-5-7-1.5-8.5C14 3 15.8 8.2 12 13z" transform="rotate(144 12 12)" />
        </svg>
      )}
      {motif === 'stamp' && (
        <svg viewBox="0 0 24 24">
          <path d="M6 6h12v12H6z" />
          <path d="M8 9h8M8 12h8M8 15h5" />
        </svg>
      )}
    </span>
  );
}

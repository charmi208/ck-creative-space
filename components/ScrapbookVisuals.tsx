import type { CSSProperties, SVGProps } from 'react';

type DoodleKind = 'spark' | 'flower' | 'swirl' | 'cursor' | 'monitor' | 'stack' | 'leaf' | 'asterisk';

export function Doodle({
  kind,
  className = '',
  coral = false,
  ...props
}: {
  kind: DoodleKind;
  className?: string;
  coral?: boolean;
} & SVGProps<SVGSVGElement>) {
  const cls = `doodle ${coral ? 'doodle-coral' : ''} ${className}`;

  return (
    <svg
      className={cls}
      viewBox="0 0 120 120"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {kind === 'spark' && (
        <>
          <path d="M60 14l9 33 33 13-33 13-9 33-9-33-33-13 33-13z" />
          <path d="M23 25l14 14M96 24L82 38M24 96l14-14M96 96L82 82" />
        </>
      )}
      {kind === 'flower' && (
        <>
          <path d="M58 63c-13-24 5-48 19-35 12 12 1 28-19 35z" />
          <path d="M58 63c-25-9-28-38-9-39 17-1 23 18 9 39z" />
          <path d="M59 64c11 23 39 22 38 3-1-17-22-22-38-3z" />
          <path d="M58 63c-23 12-41 0-35-15 7-16 29-9 35 15z" />
          <path d="M60 66c-7 15-11 28-9 40M59 82c13-9 26-11 39-8" />
        </>
      )}
      {kind === 'swirl' && (
        <>
          <path d="M19 62c16-42 76-45 86-8 7 27-26 53-56 34-23-15-9-53 21-43 20 7 17 33-3 34" />
          <path d="M26 87c10 9 22 14 36 15" />
        </>
      )}
      {kind === 'cursor' && (
        <>
          <path d="M31 19l58 41-31 6-14 31z" />
          <path d="M64 69l20 29" />
        </>
      )}
      {kind === 'monitor' && (
        <>
          <path d="M22 28h76v52H22z" />
          <path d="M39 98h42M51 80l-4 18M69 80l4 18" />
          <path d="M36 45h30M36 58h48" />
        </>
      )}
      {kind === 'stack' && (
        <>
          <path d="M30 28l55-8 7 49-55 8z" />
          <path d="M22 44l55-8 7 49-55 8z" />
          <path d="M39 55h27M40 68h36" />
        </>
      )}
      {kind === 'leaf' && (
        <>
          <path d="M33 101C38 63 54 36 91 18c8 38-5 70-58 83z" />
          <path d="M35 98c13-25 31-47 55-73" />
          <path d="M54 76c-8-2-15-6-22-13M66 60c-3-10-2-18 1-26" />
        </>
      )}
      {kind === 'asterisk' && (
        <>
          <path d="M60 20v80M20 60h80M32 32l56 56M88 32L32 88" />
          <circle cx="60" cy="60" r="10" />
        </>
      )}
    </svg>
  );
}

const previewPalettes = [
  ['#f7efe2', '#f05a43', '#171411', '#cfe2d6'],
  ['#f8f4ee', '#5a6b80', '#121820', '#d9d1c5'],
  ['#fff7ec', '#91a58d', '#20342d', '#d4e2e0'],
  ['#f6eee7', '#aa5a6b', '#2a1c22', '#ffd1dc'],
  ['#fff2dc', '#f05a43', '#191715', '#c9ab8a'],
  ['#f5f2e9', '#62526a', '#1a151d', '#d8d0c4'],
];

export function ProjectPreview({
  title,
  index,
  className = '',
}: {
  title: string;
  index: number;
  className?: string;
}) {
  const [paper, accent, dark, soft] = previewPalettes[index % previewPalettes.length];
  const style = {
    '--pv-paper': paper,
    '--pv-accent': accent,
    '--pv-dark': dark,
    '--pv-soft': soft,
  } as CSSProperties;

  return (
    <div className={`h-full w-full bg-[var(--pv-paper)] ${className}`} style={style}>
      {index % 4 === 0 && <DashboardPreview title={title} />}
      {index % 4 === 1 && <EditorialPreview title={title} />}
      {index % 4 === 2 && <MobilePreview title={title} />}
      {index % 4 === 3 && <MotionPreview title={title} />}
    </div>
  );
}

function DashboardPreview({ title }: { title: string }) {
  return (
    <div className="h-full p-4">
      <div className="flex items-center justify-between border-b border-ink/15 pb-3">
        <div className="font-display text-[18px] text-[var(--pv-dark)]">{title}</div>
        <div className="h-6 w-16 rounded-full bg-[var(--pv-accent)]" />
      </div>
      <div className="mt-4 grid h-[72%] grid-cols-[0.7fr_1.3fr] gap-3">
        <div className="grid gap-2">
          {[0, 1, 2, 3, 4].map((item) => (
            <span key={item} className="rounded-md bg-[var(--pv-soft)]" />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-[var(--pv-dark)]" />
          <div className="bg-[var(--pv-soft)]" />
          <div className="col-span-2 bg-white/70" />
        </div>
      </div>
    </div>
  );
}

function EditorialPreview({ title }: { title: string }) {
  return (
    <div className="grid h-full grid-rows-[1fr_auto] p-4">
      <div className="bg-[var(--pv-dark)] p-4 text-[var(--pv-paper)]">
        <div className="label text-[var(--pv-paper)] opacity-70">case study</div>
        <div className="mt-8 font-display text-4xl font-light leading-none">{title}</div>
      </div>
      <div className="mt-3 grid grid-cols-4 gap-2">
        {[0, 1, 2, 3].map((item) => (
          <span key={item} className="aspect-square bg-[var(--pv-accent)] opacity-80" />
        ))}
      </div>
    </div>
  );
}

function MobilePreview({ title }: { title: string }) {
  return (
    <div className="flex h-full items-center justify-center gap-3 p-4">
      {[0, 1].map((phone) => (
        <div key={phone} className="h-[86%] w-[38%] rounded-[22px] bg-[var(--pv-dark)] p-2">
          <div className="h-full rounded-[16px] bg-[var(--pv-paper)] p-3">
            <div className="h-20 rounded-xl bg-[var(--pv-accent)]" />
            <div className="mt-4 grid gap-2">
              <span className="h-5 rounded bg-[var(--pv-soft)]" />
              <span className="h-5 rounded bg-[var(--pv-soft)]" />
              <span className="h-9 rounded bg-[var(--pv-dark)] opacity-20" />
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-5 left-5 max-w-[9ch] font-display text-xl leading-none text-[var(--pv-dark)]">
        {title}
      </div>
    </div>
  );
}

function MotionPreview({ title }: { title: string }) {
  return (
    <div className="h-full bg-[var(--pv-dark)] p-4 text-[var(--pv-paper)]">
      <div className="flex items-center justify-between text-[11px] uppercase opacity-75">
        <span>timeline</span>
        <span>00:{String(title.length + 12).padStart(2, '0')}</span>
      </div>
      <div className="mt-8 grid h-28 grid-cols-12 items-end gap-1">
        {Array.from({ length: 12 }).map((_, index) => (
          <span key={index} className="bg-[var(--pv-accent)]" style={{ height: `${22 + ((index * 19) % 68)}%` }} />
        ))}
      </div>
      <div className="mt-8 font-display text-3xl font-light leading-none">{title}</div>
    </div>
  );
}

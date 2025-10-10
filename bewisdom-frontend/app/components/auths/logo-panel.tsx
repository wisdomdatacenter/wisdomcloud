export default function LogoPanel() {
  return (
    <div
      className="hidden lg:grid inset-0
       absolute items-center 

       justify-items-center

    "
    >
      <div
        className="absolute inset-0 opacity-90 dark:opacity-780"
        style={{
          background:
            "radial-gradient(1200px 600px at 80% 30%, rgba(106, 102, 170, 0.25), transparent 60%)," +
            "radial-gradient(900px 450px at 20% 90%, rgba(2,132,199,0.18), transparent 55%)",
        }}
      />
      <div
        className="relative z-10 flex h-auto flex-col 
      items-center justify-center p-10 place-items-center "
      >
        <div className="text-center">
          <div
            className="mx-auto mb-5 flex
           size-14 items-center justify-items-center 
           justify-center rounded-2xl bg-indigo-500 shadow-lg"
          >
            <svg
              width={20}
              height={20}
              viewBox="0 0 24 24"
              className="text-white"
            >
              <rect
                x={4}
                y={4}
                width={6}
                height={16}
                rx={2}
                fill="currentColor"
              />
              <rect
                x={14}
                y={0}
                width={6}
                height={25}
                rx={2}
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="text-3xl font-semibold">Wisdom</div>
          <p
            className="mt-2 max-w-sm text-balance
           text-sm text-slate-400"
          >
            Logo panel
          </p>
        </div>
      </div>
    </div>
  );
}

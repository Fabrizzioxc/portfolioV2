export function DialogAchievementsSection() {
  const achievements = [
    {
      id: 1,
      text: (
        <>
          <strong className="font-bold">Optimización de Rendimiento y SEO:</strong>{" "}
          La página web alcanzó métricas perfectas en PageSpeed con un
          rendimiento excepcional.
        </>
      ),
    },
    {
      id: 2,
      text: (
        <>
          <strong className="font-bold">Diseño y Desarrollo Integral:</strong>{" "}
          Creación de un sitio web moderno y responsivo que comunica
          eficazmente la oferta de servicios.
        </>
      ),
    },
    {
      id: 3,
      text: (
        <>
          <strong className="font-bold">Experiencia de Usuario Refinada:</strong>{" "}
          Implementación estratégica de animaciones sutiles para enriquecer la
          interacción.
        </>
      ),
    },
  ];

  return (
    <section className="space-y-6">
      <div className="flex gap-2 items-center justify-center pb-4">
        <span className="inline-block border-2 border-border px-4 py-1 text-3xl font-bold">
          Logros
        </span>
        <span className="text-3xl font-bold">Destacados</span>
      </div>

      <ol className="space-y-6">
        {achievements.map((item) => (
          <li key={item.id} className="flex items-start gap-4">
            {/* Cuadrado más grande */}
            <div className="w-12 h-12 flex items-center justify-center border-2 border-border font-bold text-2xl flex-shrink-0">
              {item.id}
            </div>
            <p className="text-base md:text-lg leading-relaxed flex-1 font-normal">
              {item.text}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}

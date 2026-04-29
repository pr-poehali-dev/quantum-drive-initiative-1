export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-red-900">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/fde83c03-8201-46b0-be91-060df6ad6a1d/files/d99a5a0b-feee-487e-9a32-4f5745035b91.jpg"
          alt="Премиум корм для кошек"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Состав без компромиссов</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Мясо первым ингредиентом, ноль злаков и искусственных добавок. Рецептура разработана ветеринарными диетологами —
          потому что твоя кошка заслуживает лучшего.
        </p>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Выбрать корм
        </button>
      </div>
    </div>
  );
}
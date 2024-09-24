import React from 'react'

export default function ChartSection() {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Título de la Sección */}
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          Visualización de Datos
        </h2>

        {/* Contenedor de Gráficos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Gráfico de pastel */}
          <div className="flex flex-col items-center">
            <img 
              src="https://static.vecteezy.com/system/resources/previews/011/509/119/non_2x/3d-pie-isometric-cycle-diagram-for-infographics-in-3-parts-free-vector.jpg" 
              alt="Diagrama de pastel"
              className="rounded-lg shadow-lg"
            />
            <p className="text-gray-700 mt-4">Diagrama de Pastel</p>
          </div>

          {/* Gráfico de barras */}
          <div className="flex flex-col items-center">
            <img 
              src="https://static.vecteezy.com/system/resources/previews/016/182/121/non_2x/graphical-representation-of-a-vertical-bar-chart-free-vector.jpg" 
              alt="Gráfico de Barras"
              className="rounded-lg shadow-lg"
            />
            <p className="text-gray-700 mt-4">Gráfico de Barras</p>
          </div>

          {/* Gráfico de líneas */}
          <div className="flex flex-col items-center">
            <img 
              src="https://www.probabilidadyestadistica.net/wp-content/uploads/2022/05/grafico-de-lineas-multiple.png" 
              alt="Gráfico de Líneas"
              className="rounded-lg shadow-lg"
            />
            <p className="text-gray-700 mt-4">Gráfico de Líneas</p>
          </div>

          {/* Diagrama de Mapa */}
          <div className="flex flex-col items-center">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/a/a9/2012_Density_Map.png" 
              alt="Diagrama de Mapa"
              className="rounded-lg shadow-lg"
            />
            <p className="text-gray-700 mt-4">Diagrama de Mapa</p>
          </div>
        </div>
      </div>
    </section>
  )
}

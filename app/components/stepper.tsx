import React from 'react'

function Stepper() {
  return (
    <ol className="lg:flex items-center w-full space-y-4 lg:space-x-8 lg:space-y-0">
      <li className=" flex-1">
        <a className="border-l-2 flex flex-col border-t-0 pl-4 pt-0 border-solid border-indigo-600 font-medium lg:pt-4 lg:border-t-2 lg:border-l-0 lg:pl-0">
          <span className="text-sm lg:text-base text-indigo-600">Paso 1</span>
          <h4 className="text-base lg:text-lg text-gray-900">Subir Prescripción</h4>
        </a>
      </li>
      <li className=" flex-1">
        <a className="border-l-2 flex flex-col border-t-0 pl-4 pt-0 border-solid border-indigo-300 font-medium lg:pt-4 lg:border-t-2 lg:border-l-0 lg:pl-0">
          <span className="text-sm lg:text-base text-indigo-600">Paso 2</span>
          <h4 className="text-base lg:text-lg text-gray-900">Enviar para Verificación</h4>
        </a>
      </li>
      <li className=" flex-1">
        <a className="border-l-2 flex flex-col border-t-0 pl-4 pt-0 border-solid border-gray-200 font-medium lg:pt-4 lg:border-t-2 lg:border-l-0 lg:pl-0">
          <span className="text-sm lg:text-base text-gray-400">Paso 3</span>
          <h4 className="text-base lg:text-lg text-gray-900">Verificación en Progreso</h4>
        </a>
      </li>
    </ol>
  )
}

export default Stepper


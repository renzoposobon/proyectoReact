import { useCart } from './context/CartContext'
import { formatPrice } from './formatPrice'

export default function CheckoutList() {

  const { items, cartLenght, getTotal } = useCart()
  
  const names = items.map(i => i.name)

  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg w-1/4 box-2 mx-32 mt-12 min-h-80 checkout">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Descripción de su compra</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ab aliquam ipsum fuga corporis.</p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Productos:</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul>
                <li>{names}</li>
              </ul>
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Cantidad:</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{cartLenght()}</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Total:</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">${formatPrice(getTotal())}</dd>
          </div>
          {/* <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Salary expectation</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">$120,000</dd>
          </div> */}
        </dl>
      </div>
    </div>
  )
}
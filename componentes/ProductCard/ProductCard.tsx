import Image from 'next/image';

export interface ProductProps{
    title: string;
    image: string;
    addRemoveProduct: ()=>void;
    isSelected: boolean
}

export default function ProductCard({ title, image, addRemoveProduct, isSelected }: ProductProps) {
    return (
        <article
            className={`
                m-2 p-4 flex flex-col items-center
                bg-blue-300 hover:bg-blue-400
                rounded-xl shadow-lg
                transition-colors duration-300
                ${isSelected ? 'bg-blue-600' : 'bg-blue-300'}
            `}
        >
            <img
                src={`https://deisishop.pythonanywhere.com${image}`}
                alt={title}
                width={150}
                height={150}
                className="rounded-md shadow-md mb-3"
            />
            <p className="font-semibold text-lg text-black mb-3 text-center">{title}</p>
            <button
                onClick={addRemoveProduct}
                className={`
                    px-4 py-2 rounded-full
                    ${isSelected ? 'bg-red-500 hover:bg-red-400' : 'bg-green-500 hover:bg-green-400'}
                    text-white font-bold transition-colors duration-200
                `}
            >
                {isSelected ? '-' : '+'}
            </button>
        </article>
    );
}
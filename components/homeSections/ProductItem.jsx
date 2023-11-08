import React from "react";
import Image from "next/image";
import Link from "next/link";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../redux/cartSlice";
import { API_URL } from "../../utils/urls";

const ProductItem = ({ product: { attributes: p, id } }) => {
  // const dispatch = useDispatch();
  // console.log(p);
  // console.log(p.imageSrc?.data?.attributes?.formats?.thumbnail?.url);
  // console.log(p.s_alt);
  return (
    <div key={id}>
      <div className="group relative flex flex-col justify-center items-center ">
        <div className="w-full overflow-hidden rounded-md flex justify-center items-center aspect-w-1 aspect-h-1 group-hover:opacity-75 ">
          <Image
            src={`${API_URL}${p.imageSrc?.data?.attributes?.formats?.medium?.url}`}
            // src={`http://127.0.0.1:1337${p.imageSrc?.data?.attributes?.formats?.medium?.url}`}
            // src={p.imageSrc?.data?.attributes?.formats?.thumbnail?.url}
            alt={p.s_alt}
            className="object-contain object-center animate-slideDownCubiBezier"
            width={100}
            height={50}
          />
          {/* </SlideDown> */}
        </div>
        {/* <SlideUp offset=""> */}
        <div className="mt-4 text-center">
          <h3 className="text-primary font-semi-bold text-lg font-custom animate-slideUpCubiBezier">
            <Link href={`/product/${p.href}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {p.name}
            </Link>
          </h3>
          <p className="py-2 text-black font-light text-lg font-custom">
            Tk {p.price}
          </p>
          <div className="flex justify-center items-center w-60 h-20">
            <p className="text-black font-regular text-sm font-raleway">
              {p.desc}
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Link href={`ShopPage`}>
              <button
                // onClick={() => dispatch(addToCart(product))}

                className="mt-4 font-semibold text-base font-raleway rounded active:bg-primary/80 relative -top-1 -left-1 bg-primary py-2.5 px-5 uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-primary before:transition-all before:content-[''] active:top-0 active:left-0 before:active:top-0 before:active:left-0"
              >
                See More
              </button>
            </Link>
          </div>
        </div>
        {/* </SlideUp> */}
      </div>
    </div>
  );
};

export default ProductItem;

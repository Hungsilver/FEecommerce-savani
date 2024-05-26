import Link from "next/link";
import React from "react";

function FormLogin() {
  return (
    <div className="mt-5">
      <form action="">
        <div className="border-1 border rounded-[5px] px-2 shadow-md shadow-gray-400/40 mb-3">
          <input
            className="w-full h-[40px] outline-none "
            type="text"
            placeholder="Email đăng nhập *"
          />
        </div>
        <div className="border-1 border rounded-[5px] px-2 shadow-md shadow-gray-400/40 mb-3">
          <input
            className="w-full h-[40px] outline-none "
            type="text"
            placeholder="Mật khẩu *"
          />
        </div>
        <div className="flex justify-end mb-3">
          <Link className="text-red-400" href={"/forgot"}>
            Quên mật khẩu
          </Link>
        </div>
        <Link
          className="block text-center text-white bg-[#EE4D2D] rounded-[5px] p-[10px]"
          href={"#"}
        >
          ĐĂNG NHẬP
        </Link>
      </form>
    </div>
  );
}

export default FormLogin;

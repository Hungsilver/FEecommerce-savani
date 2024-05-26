import Link from "next/link";
import React from "react";

function FormRegister() {
  return (
    <div className="mt-5">
      <form action="">
        <div className="border-1 border rounded-[5px] px-2 shadow-md shadow-gray-400/40 mb-3">
          <input
            className="w-full h-[40px] outline-none "
            type="text"
            placeholder="Họ và tên *"
          />
        </div>
        <div className="border-1 border rounded-[5px] px-2 shadow-md shadow-gray-400/40 mb-3">
          <input
            className="w-full h-[40px] outline-none "
            type="text"
            placeholder="Số điện thoại *"
          />
        </div>
        <div className="border-1 border rounded-[5px] px-2 shadow-md shadow-gray-400/40 mb-3">
          <input
            className="w-full h-[40px] outline-none "
            type="text"
            placeholder="Nhập địa chỉ email *
            "
          />
        </div>
        <div className="border-1 border rounded-[5px] px-2 shadow-md shadow-gray-400/40 mb-3">
          <input
            className="w-full h-[40px] outline-none "
            type="text"
            placeholder="Mật khẩu *"
          />
        </div>
        <div className="border-1 border rounded-[5px] px-2 shadow-md shadow-gray-400/40 mb-3">
          <input
            className="w-full h-[40px] outline-none "
            type="text"
            placeholder="Xác nhận mật khẩu *"
          />
        </div>

        <Link
          className="block text-center text-white bg-[#EE4D2D] rounded-[5px] p-[10px]"
          href={"#"}
        >
          TẠO TÀI KHOẢN
        </Link>
      </form>
    </div>
  );
}

export default FormRegister;

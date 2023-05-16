import React, { useEffect, useState } from "react";

interface IAddNew {
  signInhandler: (args: boolean) => void;
}
const SignIn = ({ signInhandler }: IAddNew) => {
  const addPhtoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {};

  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="fixed top-0 left-0 z-[1000000] bg-black-100/25 h-[100vh] w-[100vw] flex justify-center">
      <form
        className="absolute z-10 min-[768px]:w-[620px] rounded-[12px] bg-secondary flex flex-col top-[20%] p-5"
        onSubmit={onSubmitHandler}
      >
        <label className="text-primary text-[24px] font-[500] mb-[20px]">
          Sign In
        </label>
        <label className="text-primary text-[14px] font-[500] mb-[10px]">
          Username
        </label>
        <input
          type="text"
          className="w-[100%] h-[55px] rounded-[12px] outline-none border-[1px] border-secondary  pl-3 text-primary focus:border-[1px] focus:border-primary mb-[20px]"
          name="Label"
          onChange={addPhtoHandler}
        />
        <label className="text-primary text-[14px] font-[500] mb-[10px]">
          Password
        </label>
        <input
          type="text"
          className="w-[100%] h-[55px] rounded-[12px] border-[1px] border-secondary  outline-none px-3 text-primary focus:border-primary mb-[25px] text-ellipsis overflow-hidden"
          onChange={addPhtoHandler}
        />
        <div className="w-full flex">
          <button
            className="min-w-auto h-[55px] text-tertiary rounded-[12px] bg-none active:scale-[0.95] ml-auto"
            onClick={(e: any) => {
              e.preventDefault();
              signInhandler(false);
            }}
          >
            Cancel
          </button>
          <button className="min-w-[150px] h-[55px] text-white rounded-[12px] bg-green active:scale-[0.95] ml-3">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;

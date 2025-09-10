'use client'

import { useTransition } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ClipLoader from "react-spinners/ClipLoader";
import { formHookSchema, FormHookSchema } from "./schema/form-hook-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from 'sonner';

export default function ReactFormHook() {
    const [pending, startTransition] = useTransition();
    const form = useForm<FormHookSchema>({
        resolver: zodResolver(formHookSchema),
        defaultValues: {
            fullName: '',
            phoneNumber: '',
        },
    });

    const {
        control,
        handleSubmit,
        register,
        setValue,
        formState: { errors },
    } = form;

    const onSubmit: SubmitHandler<FormHookSchema> = (value) => {
        startTransition(async () => {
            // const { error, data } = await EventRegistration({
            //     fullname: value.fullName,
            //     phoneNumber: value.phoneNumber,
            // });

            // if (error && !data) {
            //     toast.error(error.message, {
            //         position: 'top-right',
            //     });
            //     return;
            // } else {
            //     toast.success('បានចុះឈ្មោះចូលរួម ដោយជោគជ័យ!', {
            //         position: 'top-right',
            //         style: {
            //             fontSize: '11pt',
            //         },
            //     });
            //     window.location.href = `/`;
            // }
            toast.success('បានចុះឈ្មោះចូលរួម ដោយជោគជ័យ!', {
                position: 'top-right',
                style: {
                    fontSize: '11pt',
                },
            });
        });
    };

    return <>
        <div className="container pt-10">
            <div className="flex justify-center">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="pb-5">
                    <div className="grid grid-cols-1 text-center">
                        <h3 className="font-semibold text-2xl leading-normal mb-4">
                            React Hook Form
                        </h3>
                    </div>
                    <div className="grid lg:grid-cols-12 grid-cols-1 gap-3">
                        <div className="lg:col-span-12">
                            <label htmlFor="email" className="font-semibold">
                                Fullname
                            </label>
                            <input
                                {...register("fullName")}
                                className={`  mt-2 w-full py-2 px-3 h-10 bg-transparent  rounded outline-none border focus:ring-0 ${errors.fullName &&
                                    "border-1 border-red-500 "
                                    }`}
                                placeholder="fullname"
                            // className={`  mt-2 w-full py-2 px-3 h-10 bg-transparent  rounded outline-none border focus:ring-0`}
                            />
                            {errors.fullName && (
                                <p className="text-red-500">{`${errors.fullName.message}`}</p>
                            )}
                        </div>
                        <div className="lg:col-span-12">
                            <label htmlFor="email" className="font-semibold">
                                Phone Number
                            </label>
                            <input
                                {...register("phoneNumber")}
                                className={`  mt-2 w-full py-2 px-3 h-10 bg-transparent  rounded outline-none border focus:ring-0 ${errors.phoneNumber &&
                                    "border-1 border-red-500 "
                                    }`}
                                // className={`  mt-2 w-full py-2 px-3 h-10 bg-transparent  rounded outline-none border focus:ring-0`}

                                placeholder="phoneNumber"
                            />
                            {errors.phoneNumber && (
                                <p className="text-red-500">{`${errors.phoneNumber.message}`}</p>
                            )}
                        </div>
                    </div>

                    <div className="mt-5">
                        <button
                            type="submit"
                            disabled={pending}
                            className="w-full h-10  px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-sky-700 text-white"
                        >
                            {pending ? (
                                <>
                                    <ClipLoader color="white" className="mr-1" size={20} />
                                    Loading...
                                </>
                            ) : (
                                "Save"
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </>
}

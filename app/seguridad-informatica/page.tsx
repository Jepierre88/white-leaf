"use client";
import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

export default function SeguridadInformatica() {
    type User = {
        DocumentoIdentidad: string;
        Nombre: string;
        Edad: number;
    };
    const { register, handleSubmit } = useForm();
    const [users, setUsers] = useState<User[]>([]);

    const columns: GridColDef<(typeof users)[number]>[] = [
        {
            field: "DocumentoIdentidad",
            headerName: "Documento de identidad",
            width: 90,
        },
        {
            field: "Nombre",
            headerName: "Nombre",
            width: 150,
        },
        {
            field: "Edad",
            headerName: "Edad",
            type: "number",
            width: 110,
            editable: true,
        },
    ];

    const getData = async () => {
        try {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_URL}/cyber-security`
            );
            console.log(response);
            setUsers(response.data.estudiantes);
        } catch (error: any) {
            console.log(error.data.message);
        }
    };

    useEffect(() => {
        getData();
        return () => {};
    }, []);

    const onSubmit = async (data: any) => {
        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_URL}/cyber-security/create-student`,
                data
            );
            getData();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="mx-auto flex flex-col max-w-4xl gap-5 my-auto h-96 items-center justify-center"
            >
                <div className="flex-col flex">
                    <label htmlFor="Nombre">Nombre</label>
                    <input
                        placeholder="Digite su nombre"
                        {...register("Nombre")}
                        className="px-3 py-1 bg-slate-700 rounded-lg"
                    />
                </div>

                <div className="flex-col flex">
                    <label htmlFor="Edad">Edad</label>
                    <input
                        placeholder="Edad"
                        {...register("Edad", { required: true })}
                        type="number"
                        className="px-3 py-1 bg-slate-700 rounded-lg"
                    />
                </div>
                <div className="flex-col flex">
                    <label htmlFor="Nombre">Documento de identidad</label>
                    <input
                        type="text"
                        placeholder="Documento de identidad"
                        {...register("DocumentoIdentidad", { required: true })}
                        className="px-3 py-1 bg-slate-700 rounded-lg"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-[#09f] px-7 py-2 rounded-lg"
                >
                    Registrarme
                </button>
            </form>
            <div className="">
                <DataGrid
                    sx={{
                        height: 300,
                        width: "80%",
                        maxWidth: "500px",
                        margin: "0 auto",
                        backgroundColor: "#1e1e1e",
                        color: "#e0e0e0", //
                        "& .MuiDataGrid-cell": {
                            backgroundColor: "#2e2e2e",
                            color: "#e0e0e0",
                            fontSize: "14px",
                            borderBottom: "1px solid #3e3e3e",
                        },
                        "& .MuiDataGrid-columnHeaders": {
                            backgroundColor: "#000",
                            color: "#333",
                        },
                        "& .MuiDataGrid-footerContainer": {
                            backgroundColor: "#1e1e1e",
                            color: "#e0e0e0",
                        },
                        "& .MuiCheckbox-root": {
                            color: "#e0e0e0",
                        },
                        "& .MuiDataGrid-iconSeparator": {
                            color: "#555",
                        },
                        "& .MuiDataGrid-footerContainer .MuiTablePagination-root":
                            {
                                color: "#f0f0f0",
                            },
                        "& .MuiTablePagination-actions svg": {
                            color: "#f0f0f0",
                        },
                    }}
                    rows={users}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    getRowId={(row: any) => row._id}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </div>
        </>
    );
}

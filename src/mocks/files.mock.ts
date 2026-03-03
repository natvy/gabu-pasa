// src/mocks/files.mock.ts
// Este archivo contiene datos de ejemplo para los archivos académicos
// en el sistema. Estos datos se utilizan para pruebas y desarrollo,
// simulando la información que podría estar presente en una base de datos real.

import { AcademicFile } from '@/types/file';

export const filesMock: AcademicFile[] = [
    {
        id: "f1",
        name: "Ejercicios de Álgebra.pdf",
        type: "pdf",
        uploadedBy: "t1",
        relatedTo: "s1"
    },
    {
       id: "f2",
       name: "Funciones.png",
       type: "png",
       uploadedBy: "t1",
       relatedTo: "s1"
    },
    {
        id: "f3",
        name: "Ecuaciones.doc",
        type: "doc",
        uploadedBy: "s1",
        relatedTo: "t1"
    },
    {
        id: "f4",
        name: "Guía de Trigonometría.pdf",
        type: "pdf",
        uploadedBy: "t1",
        relatedTo: "s1"
    },
    {
        id: "f5",
        name: "Gráficas.jpg",
        type: "jpg",
        uploadedBy: "s1",
        relatedTo: "t1"
    }
];
export interface ICategory {
    id: number;
    name: string;
    thumbnail: string;
    description: string;
    categoriesChild: ICategoryChild[];
    subCategories: ISubCategory[];
    status: number;
    createdDate: string;
    lastModifiedDate: string;
}

export interface ICategoryChild {
    id: number;
    name: string;
    thumbnail: string;
    description: string;
    subCategories: ISubCategory[];
    status: number;
    createdDate: string;
    lastModifiedDate: string;
}

export interface ISubCategory {
    id: number;
    name: string;
    image: string;
    description: string;
    createdDate: string;
    lastModifiedDate: string;
    status: number;
}

export interface IProduct {
    id: number;
    code: string;
    name: string;
    subCategory: ISubCategory;
    promotion: any;
    description: string;
    image: any;
    productDetails: any[];
    createdDate: string;
    lastModifiedDate: string;
    status: number;
}

export interface IPageableData {
    pageNumber: number;
    pageSize: number;
    sort: {
        empty: boolean;
        sorted: boolean;
        unsorted: boolean;
    };
    offset: number;
    unpaged: boolean;
    paged: boolean;
}

export interface IResponseData {
    content: IProduct[];
    pageable: IPageableData;
    last: boolean;
    totalElements: number;
    totalPages: number;
    size: number;
    number: number;
    sort: {
        empty: boolean;
        sorted: boolean;
        unsorted: boolean;
    };
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}

export interface ICategoryHome {
    id: number;
    name: string;
    thumbnail: string;
    description: string;
    subCategoriesHome: ISubCategory[];
    status: number;
    createdDate: string;
    lastModifiedDate: string;
}

export const dataCategories: ICategory[] = [
    {
        "id": 1,
        "name": "nam",
        "thumbnail": "https://savani.vn/images/menus/thoi-trang-nam-savani_1706273946.jpg",
        "description": "dd",
        "categoriesChild": [
            {
                "id": 6,
                "name": "quần",
                "thumbnail": "''",
                "description": "dd",
                "subCategories": [
                    {
                        "id": 21,
                        "name": "Quần âu",
                        "image": "''",
                        "description": "none",
                        "createdDate": "2024-03-05T16:37:47.040007Z",
                        "lastModifiedDate": "2024-03-05T16:37:47.040007Z",
                        "status": 1
                    },
                    {
                        "id": 23,
                        "name": "Quần jean",
                        "image": "''",
                        "description": "none",
                        "createdDate": "2024-03-05T16:37:47.040007Z",
                        "lastModifiedDate": "2024-03-05T16:37:47.040007Z",
                        "status": 1
                    },
                    {
                        "id": 25,
                        "name": "Quần short",
                        "image": "''",
                        "description": "none",
                        "createdDate": "2024-03-05T16:37:47.040007Z",
                        "lastModifiedDate": "2024-03-05T16:37:47.040007Z",
                        "status": 1
                    }
                ],
                "status": 1,
                "createdDate": "2024-03-05T16:37:47.040007Z",
                "lastModifiedDate": "2024-03-05T16:37:47.040007Z"
            },
            {
                "id": 8,
                "name": "phụ kiện",
                "thumbnail": "''",
                "description": "dd",
                "subCategories": [
                    {
                        "id": 38,
                        "name": "Cà vạt",
                        "image": "''",
                        "description": "none",
                        "createdDate": "2024-03-05T16:37:47.040007Z",
                        "lastModifiedDate": "2024-03-05T16:37:47.040007Z",
                        "status": 1
                    },
                    {
                        "id": 39,
                        "name": "Dây lưng",
                        "image": "''",
                        "description": "none",
                        "createdDate": "2024-03-05T16:37:47.040007Z",
                        "lastModifiedDate": "2024-03-05T16:37:47.040007Z",
                        "status": 1
                    }
                ],
                "status": 1,
                "createdDate": "2024-03-05T16:37:47.040007Z",
                "lastModifiedDate": "2024-03-05T16:37:47.040007Z"
            },
            {
                "id": 5,
                "name": "áo",
                "thumbnail": "''",
                "description": "dd",
                "subCategories": [
                    {
                        "id": 16,
                        "name": "Áo chống nắng",
                        "image": "''",
                        "description": "none",
                        "createdDate": "2024-03-05T16:37:47.040007Z",
                        "lastModifiedDate": "2024-03-05T16:37:47.040007Z",
                        "status": 1
                    },
                    {
                        "id": 5,
                        "name": "Áo T-Shirt",
                        "image": "''",
                        "description": "none",
                        "createdDate": "2024-03-05T16:37:47.040007Z",
                        "lastModifiedDate": "2024-03-05T16:37:47.040007Z",
                        "status": 1
                    },
                    {
                        "id": 18,
                        "name": "Áo len",
                        "image": "''",
                        "description": "none",
                        "createdDate": "2024-03-05T16:37:47.040007Z",
                        "lastModifiedDate": "2024-03-05T16:37:47.040007Z",
                        "status": 1
                    },
                    {
                        "id": 1,
                        "name": "Áo polo",
                        "image": "''",
                        "description": "none",
                        "createdDate": "2024-03-05T16:37:47.040007Z",
                        "lastModifiedDate": "2024-03-05T16:37:47.040007Z",
                        "status": 1
                    },
                    {
                        "id": 9,
                        "name": "Áo nỉ",
                        "image": "''",
                        "description": "none",
                        "createdDate": "2024-03-05T16:37:47.040007Z",
                        "lastModifiedDate": "2024-03-05T16:37:47.040007Z",
                        "status": 1
                    },
                    {
                        "id": 13,
                        "name": "Áo sơ mi",
                        "image": "''",
                        "description": "none",
                        "createdDate": "2024-03-05T16:37:47.040007Z",
                        "lastModifiedDate": "2024-03-05T16:37:47.040007Z",
                        "status": 1
                    }
                ],
                "status": 1,
                "createdDate": "2024-03-05T16:37:47.040007Z",
                "lastModifiedDate": "2024-03-05T16:37:47.040007Z"
            },
            {
                "id": 7,
                "name": "bộ đồ",
                "thumbnail": "''",
                "description": "dd",
                "subCategories": [
                    {
                        "id": 30,
                        "name": "Bộ đồ hè",
                        "image": "''",
                        "description": "none",
                        "createdDate": "2024-03-05T16:37:47.040007Z",
                        "lastModifiedDate": "2024-03-05T16:37:47.040007Z",
                        "status": 1
                    },
                    {
                        "id": 29,
                        "name": "Bộ vest",
                        "image": "''",
                        "description": "none",
                        "createdDate": "2024-03-05T16:37:47.040007Z",
                        "lastModifiedDate": "2024-03-05T16:37:47.040007Z",
                        "status": 1
                    },
                    {
                        "id": 31,
                        "name": "Bộ nỉ",
                        "image": "''",
                        "description": "none",
                        "createdDate": "2024-03-05T16:37:47.040007Z",
                        "lastModifiedDate": "2024-03-05T16:37:47.040007Z",
                        "status": 1
                    }
                ],
                "status": 1,
                "createdDate": "2024-03-05T16:37:47.040007Z",
                "lastModifiedDate": "2024-03-05T16:37:47.040007Z"
            }
        ],
        "subCategories": [],
        "status": 1,
        "createdDate": "2024-03-05T16:37:47.040007Z",
        "lastModifiedDate": "2024-03-05T16:37:47.040007Z"
    },
    {
        "id": 2,
        "name": "nữ",
        "thumbnail": "https://savani.vn/images/menus/thoi-trang-nu-savani_1706273969.jpg",
        "description": "dd",
        "categoriesChild": [
            {
                "id": 13,
                "name": "áo",
                "thumbnail": "''",
                "description": "dd",
                "subCategories": [
                    {
                        "id": 2,
                        "name": "Áo polo",
                        "image": "''",
                        "description": "none",
                        "createdDate": "2024-03-05T16:37:47.040007Z",
                        "lastModifiedDate": "2024-03-05T16:37:47.040007Z",
                        "status": 1
                    },
                    {
                        "id": 20,
                        "name": "Áo len",
                        "image": "''",
                        "description": "none",
                        "createdDate": "2024-03-05T16:37:47.040007Z",
                        "lastModifiedDate": "2024-03-05T16:37:47.040007Z",
                        "status": 1
                    },
                    {
                        "id": 11,
                        "name": "Áo nỉ",
                        "image": "''",
                        "description": "none",
                        "createdDate": "2024-03-05T16:37:47.040007Z",
                        "lastModifiedDate": "2024-03-05T16:37:47.040007Z",
                        "status": 1
                    },
                    {
                        "id": 7,
                        "name": "Áo T-Shirt",
                        "image": "''",
                        "description": "none",
                        "createdDate": "2024-03-05T16:37:47.040007Z",
                        "lastModifiedDate": "2024-03-05T16:37:47.040007Z",
                        "status": 1
                    },
                    {
                        "id": 15,
                        "name": "Áo sơ mi",
                        "image": "''",
                        "description": "none",
                        "createdDate": "2024-03-05T16:37:47.040007Z",
                        "lastModifiedDate": "2024-03-05T16:37:47.040007Z",
                        "status": 1
                    }
                ],
                "status": 1,
                "createdDate": "2024-03-05T16:37:47.040007Z",
                "lastModifiedDate": "2024-03-05T16:37:47.040007Z"
            },
            {
                "id": 17,
                "name": "bộ đồ",
                "thumbnail": "''",
                "description": "dd",
                "subCategories": [
                    {
                        "id": 34,
                        "name": "Bộ đồ nữ",
                        "image": "''",
                        "description": "none",
                        "createdDate": "2024-03-05T16:37:47.040007Z",
                        "lastModifiedDate": "2024-03-05T16:37:47.040007Z",
                        "status": 1
                    },
                    {
                        "id": 35,
                        "name": "Bộ nỉ cổ tròn",
                        "image": "''",
                        "description": "none",
                        "createdDate": "2024-03-05T16:37:47.040007Z",
                        "lastModifiedDate": "2024-03-05T16:37:47.040007Z",
                        "status": 1
                    }
                ],
                "status": 1,
                "createdDate": "2024-03-05T16:37:47.040007Z",
                "lastModifiedDate": "2024-03-05T16:37:47.040007Z"
            },
            {
                "id": 9,
                "name": "váy nữ",
                "thumbnail": "''",
                "description": "dd",
                "subCategories": [
                    {
                        "id": 28,
                        "name": "Chân váy",
                        "image": "''",
                        "description": "none",
                        "createdDate": "2024-03-05T16:37:47.040007Z",
                        "lastModifiedDate": "2024-03-05T16:37:47.040007Z",
                        "status": 1
                    }
                ],
                "status": 1,
                "createdDate": "2024-03-05T16:37:47.040007Z",
                "lastModifiedDate": "2024-03-05T16:37:47.040007Z"
            },
            {
                "id": 15,
                "name": "quần",
                "thumbnail": "''",
                "description": "dd",
                "subCategories": [
                    {
                        "id": 24,
                        "name": "Quần jean",
                        "image": "''",
                        "description": "none",
                        "createdDate": "2024-03-05T16:37:47.040007Z",
                        "lastModifiedDate": "2024-03-05T16:37:47.040007Z",
                        "status": 1
                    },
                    {
                        "id": 26,
                        "name": "Quần short",
                        "image": "''",
                        "description": "none",
                        "createdDate": "2024-03-05T16:37:47.040007Z",
                        "lastModifiedDate": "2024-03-05T16:37:47.040007Z",
                        "status": 1
                    },
                    {
                        "id": 22,
                        "name": "Quần âu",
                        "image": "''",
                        "description": "none",
                        "createdDate": "2024-03-05T16:37:47.040007Z",
                        "lastModifiedDate": "2024-03-05T16:37:47.040007Z",
                        "status": 1
                    }
                ],
                "status": 1,
                "createdDate": "2024-03-05T16:37:47.040007Z",
                "lastModifiedDate": "2024-03-05T16:37:47.040007Z"
            }
        ],
        "subCategories": [],
        "status": 1,
        "createdDate": "2024-03-05T16:37:47.040007Z",
        "lastModifiedDate": "2024-03-05T16:37:47.040007Z"
    },
    {
        "id": 3,
        "name": "trẻ em",
        "thumbnail": "https://savani.vn/images/menus/thoi-trang-tre-em_1706274031.jpg",
        "description": "dd",
        "categoriesChild": [
            {
                "id": 18,
                "name": "bộ đồ",
                "thumbnail": "''",
                "description": "dd",
                "subCategories": [
                    {
                        "id": 36,
                        "name": "Bộ xuân hè",
                        "image": "''",
                        "description": "none",
                        "createdDate": "2024-03-05T16:37:47.040007Z",
                        "lastModifiedDate": "2024-03-05T16:37:47.040007Z",
                        "status": 1
                    },
                    {
                        "id": 37,
                        "name": "Bộ thu đông",
                        "image": "''",
                        "description": "none",
                        "createdDate": "2024-03-05T16:37:47.040007Z",
                        "lastModifiedDate": "2024-03-05T16:37:47.040007Z",
                        "status": 1
                    }
                ],
                "status": 1,
                "createdDate": "2024-03-05T16:37:47.040007Z",
                "lastModifiedDate": "2024-03-05T16:37:47.040007Z"
            },
            {
                "id": 16,
                "name": "quần",
                "thumbnail": "''",
                "description": "dd",
                "subCategories": [
                    {
                        "id": 27,
                        "name": "Quần short",
                        "image": "''",
                        "description": "none",
                        "createdDate": "2024-03-05T16:37:47.040007Z",
                        "lastModifiedDate": "2024-03-05T16:37:47.040007Z",
                        "status": 1
                    }
                ],
                "status": 1,
                "createdDate": "2024-03-05T16:37:47.040007Z",
                "lastModifiedDate": "2024-03-05T16:37:47.040007Z"
            },
            {
                "id": 10,
                "name": "váy trẻ em",
                "thumbnail": "''",
                "description": "dd",
                "subCategories": [
                    {
                        "id": 33,
                        "name": "Váy bé gái",
                        "image": "''",
                        "description": "none",
                        "createdDate": "2024-03-05T16:37:47.040007Z",
                        "lastModifiedDate": "2024-03-05T16:37:47.040007Z",
                        "status": 1
                    },
                    {
                        "id": 32,
                        "name": "Chân váy",
                        "image": "''",
                        "description": "none",
                        "createdDate": "2024-03-05T16:37:47.040007Z",
                        "lastModifiedDate": "2024-03-05T16:37:47.040007Z",
                        "status": 1
                    }
                ],
                "status": 1,
                "createdDate": "2024-03-05T16:37:47.040007Z",
                "lastModifiedDate": "2024-03-05T16:37:47.040007Z"
            },
            {
                "id": 14,
                "name": "áo",
                "thumbnail": "''",
                "description": "dd",
                "subCategories": [
                    {
                        "id": 8,
                        "name": "Áo T-Shirt",
                        "image": "''",
                        "description": "none",
                        "createdDate": "2024-03-05T16:37:47.040007Z",
                        "lastModifiedDate": "2024-03-05T16:37:47.040007Z",
                        "status": 1
                    },
                    {
                        "id": 12,
                        "name": "Áo nỉ",
                        "image": "''",
                        "description": "none",
                        "createdDate": "2024-03-05T16:37:47.040007Z",
                        "lastModifiedDate": "2024-03-05T16:37:47.040007Z",
                        "status": 1
                    },
                    {
                        "id": 3,
                        "name": "Áo polo",
                        "image": "''",
                        "description": "none",
                        "createdDate": "2024-03-05T16:37:47.040007Z",
                        "lastModifiedDate": "2024-03-05T16:37:47.040007Z",
                        "status": 1
                    }
                ],
                "status": 1,
                "createdDate": "2024-03-05T16:37:47.040007Z",
                "lastModifiedDate": "2024-03-05T16:37:47.040007Z"
            }
        ],
        "subCategories": [],
        "status": 1,
        "createdDate": "2024-03-05T16:37:47.040007Z",
        "lastModifiedDate": "2024-03-05T16:37:47.040007Z"
    },
    {
        "id": 4,
        "name": "đồng phục",
        "thumbnail": "https://savani.vn/images/menus/thoi-trang-gia-dinh-savani_1706274051.jpg",
        "description": "dd",
        "categoriesChild": [
            {
                "id": 11,
                "name": "đồng phục gia đình",
                "thumbnail": "''",
                "description": "dd",
                "subCategories": [
                    {
                        "id": 10,
                        "name": "Áo nỉ",
                        "image": "''",
                        "description": "none",
                        "createdDate": "2024-03-05T16:37:47.040007Z",
                        "lastModifiedDate": "2024-03-05T16:37:47.040007Z",
                        "status": 1
                    },
                    {
                        "id": 14,
                        "name": "Áo sơ mi",
                        "image": "''",
                        "description": "none",
                        "createdDate": "2024-03-05T16:37:47.040007Z",
                        "lastModifiedDate": "2024-03-05T16:37:47.040007Z",
                        "status": 1
                    },
                    {
                        "id": 17,
                        "name": "Áo chống nắng",
                        "image": "''",
                        "description": "none",
                        "createdDate": "2024-03-05T16:37:47.040007Z",
                        "lastModifiedDate": "2024-03-05T16:37:47.040007Z",
                        "status": 1
                    },
                    {
                        "id": 19,
                        "name": "Áo len",
                        "image": "''",
                        "description": "none",
                        "createdDate": "2024-03-05T16:37:47.040007Z",
                        "lastModifiedDate": "2024-03-05T16:37:47.040007Z",
                        "status": 1
                    },
                    {
                        "id": 6,
                        "name": "Áo T-Shirt",
                        "image": "''",
                        "description": "none",
                        "createdDate": "2024-03-05T16:37:47.040007Z",
                        "lastModifiedDate": "2024-03-05T16:37:47.040007Z",
                        "status": 1
                    },
                    {
                        "id": 4,
                        "name": "Áo polo",
                        "image": "''",
                        "description": "none",
                        "createdDate": "2024-03-05T16:37:47.040007Z",
                        "lastModifiedDate": "2024-03-05T16:37:47.040007Z",
                        "status": 1
                    }
                ],
                "status": 1,
                "createdDate": "2024-03-05T16:37:47.040007Z",
                "lastModifiedDate": "2024-03-05T16:37:47.040007Z"
            },
            {
                "id": 12,
                "name": "đồng phục nhóm",
                "thumbnail": "''",
                "description": "dd",
                "subCategories": [],
                "status": 1,
                "createdDate": "2024-03-05T16:37:47.040007Z",
                "lastModifiedDate": "2024-03-05T16:37:47.040007Z"
            }
        ],
        "subCategories": [],
        "status": 1,
        "createdDate": "2024-03-05T16:37:47.040007Z",
        "lastModifiedDate": "2024-03-05T16:37:47.040007Z"
    }
]
export const dataCategoriesHome: ICategoryHome[] = [
    {
        "id": 1,
        "name": "nam",
        "thumbnail": "https://savani.vn/images/menus/thoi-trang-nam-savani_1706273946.jpg",
        "description": "dd",
        "subCategoriesHome": [
            {
                "id": 21,
                "name": "Quần âu",
                "image": "https://savani.vn/images/products/cat/2023/07/resized/nam-15_1690536219.webp",
                "description": "none",
                "createdDate": "2024-03-05T16:37:47.040007Z",
                "lastModifiedDate": "2024-03-05T16:37:47.040007Z",
                "status": 1
            },
            {
                "id": 23,
                "name": "Quần jean",
                "image": "https://savani.vn/images/products/cat/2023/07/resized/nam-15_1690536219.webp",
                "description": "none",
                "createdDate": "2024-03-05T16:37:47.040007Z",
                "lastModifiedDate": "2024-03-05T16:37:47.040007Z",
                "status": 1
            },
            {
                "id": 29,
                "name": "Bộ vest",
                "image": "https://savani.vn/images/products/cat/2023/07/resized/nam-16_1690536241.webp",
                "description": "none",
                "createdDate": "2024-03-05T16:37:47.040007Z",
                "lastModifiedDate": "2024-03-05T16:37:47.040007Z",
                "status": 1
            },
        ],
        "status": 1,
        "createdDate": "2024-03-05T16:37:47.040007Z",
        "lastModifiedDate": "2024-03-05T16:37:47.040007Z"
    },
    {
        "id": 2,
        "name": "nữ",
        "thumbnail": "https://savani.vn/images/menus/thoi-trang-nu-savani_1706273969.jpg",
        "description": "dd",
        "subCategoriesHome": [
            {
                "id": 2,
                "name": "Áo polo",
                "image": "https://savani.vn/images/products/cat/2023/07/resized/_wpf012-2b1065-2_1690183051.webp",
                "description": "none",
                "createdDate": "2024-03-05T16:37:47.040007Z",
                "lastModifiedDate": "2024-03-05T16:37:47.040007Z",
                "status": 1
            },
            {
                "id": 20,
                "name": "Áo len",
                "image": "https://savani.vn/images/products/cat/2023/07/resized/_wts004-2p0073-1_1690183033.webp",
                "description": "none",
                "createdDate": "2024-03-05T16:37:47.040007Z",
                "lastModifiedDate": "2024-03-05T16:37:47.040007Z",
                "status": 1
            },
            {
                "id": 11,
                "name": "Áo nỉ",
                "image": "https://savani.vn/images/products/cat/2023/07/resized/ao-so-mi-ngan-tay-basic-nu_1690183018.webp",
                "description": "none",
                "createdDate": "2024-03-05T16:37:47.040007Z",
                "lastModifiedDate": "2024-03-05T16:37:47.040007Z",
                "status": 1
            },
            {
                "id": 24,
                "name": "Quần jean",
                "image": "https://savani.vn/images/products/cat/2023/07/resized/mqj002-3-a6837--01_1690183067.webp",
                "description": "none",
                "createdDate": "2024-03-05T16:37:47.040007Z",
                "lastModifiedDate": "2024-03-05T16:37:47.040007Z",
                "status": 1
            },
            {
                "id": 26,
                "name": "Quần short",
                "image": "https://savani.vn/images/products/cat/2023/07/resized/mqj002-3-a6837--01_1690183067.webp",
                "description": "none",
                "createdDate": "2024-03-05T16:37:47.040007Z",
                "lastModifiedDate": "2024-03-05T16:37:47.040007Z",
                "status": 1
            }
        ],
        "status": 1,
        "createdDate": "2024-03-05T16:37:47.040007Z",
        "lastModifiedDate": "2024-03-05T16:37:47.040007Z"
    },
    {
        "id": 3,
        "name": "trẻ em",
        "thumbnail": "https://savani.vn/images/menus/thoi-trang-tre-em_1706274031.jpg",
        "description": "dd",
        "subCategoriesHome": [
            {
                "id": 36,
                "name": "Bộ xuân hè",
                "image": "https://savani.vn/images/products/cat/2023/07/resized/kid-06_1690536385.webp",
                "description": "none",
                "createdDate": "2024-03-05T16:37:47.040007Z",
                "lastModifiedDate": "2024-03-05T16:37:47.040007Z",
                "status": 1
            },
            {
                "id": 37,
                "name": "Bộ thu đông",
                "image": "https://savani.vn/images/products/cat/2023/07/resized/kid-05_1690536391.webp",
                "description": "none",
                "createdDate": "2024-03-05T16:37:47.040007Z",
                "lastModifiedDate": "2024-03-05T16:37:47.040007Z",
                "status": 1
            },
            {
                "id": 27,
                "name": "Quần short",
                "image": "https://savani.vn/images/products/cat/2023/07/resized/kid-03_1690536425.webp",
                "description": "none",
                "createdDate": "2024-03-05T16:37:47.040007Z",
                "lastModifiedDate": "2024-03-05T16:37:47.040007Z",
                "status": 1
            }
        ],
        "status": 1,
        "createdDate": "2024-03-05T16:37:47.040007Z",
        "lastModifiedDate": "2024-03-05T16:37:47.040007Z"
    },
    {
        "id": 4,
        "name": "đồng phục",
        "thumbnail": "https://savani.vn/images/menus/thoi-trang-gia-dinh-savani_1706274051.jpg",
        "description": "dd",
        "subCategoriesHome": [
            {
                "id": 6,
                "name": "Áo T-Shirt",
                "image": "https://savani.vn/images/products/cat/2023/07/resized/dp-11_1690536291.webp",
                "description": "none",
                "createdDate": "2024-03-05T16:37:47.040007Z",
                "lastModifiedDate": "2024-03-05T16:37:47.040007Z",
                "status": 1
            },
            {
                "id": 4,
                "name": "Áo polo",
                "image": "https://savani.vn/images/products/cat/2023/07/resized/dp-09_1690536301.webp",
                "description": "none",
                "createdDate": "2024-03-05T16:37:47.040007Z",
                "lastModifiedDate": "2024-03-05T16:37:47.040007Z",
                "status": 1
            }
        ],
        "status": 1,
        "createdDate": "2024-03-05T16:37:47.040007Z",
        "lastModifiedDate": "2024-03-05T16:37:47.040007Z"
    }
]

export const dataProductsByCategoryId1: IResponseData = {
    "content": [
        {
            "id": 3,
            "code": "MS003",
            "name": "Áo polo nam",
            "subCategory": {
                "id": 1,
                "name": "Áo polo",
                "image": "''",
                "description": "none",
                "createdDate": "2024-03-05T16:37:47.040007Z",
                "lastModifiedDate": "2024-03-05T16:37:47.040007Z",
                "status": 1
            },
            "promotion": null,
            "description": "không",
            "image": null,
            "productDetails": [],
            "createdDate": "2024-03-05T16:37:47.040007Z",
            "lastModifiedDate": "2024-03-05T16:37:47.040007Z",
            "status": 1
        }
    ],
    "pageable": {
        "pageNumber": 0,
        "pageSize": 20,
        "sort": {
            "empty": true,
            "sorted": false,
            "unsorted": true
        },
        "offset": 0,
        "unpaged": false,
        "paged": true
    },
    "last": true,
    "totalElements": 1,
    "totalPages": 1,
    "size": 20,
    "number": 0,
    "sort": {
        "empty": true,
        "sorted": false,
        "unsorted": true
    },
    "first": true,
    "numberOfElements": 1,
    "empty": false
}
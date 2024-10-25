export interface ICompany {
    content:          Content[];
    pageable:         Pageable;
    totalPages:       number;
    totalElements:    number;
    last:             boolean;
    numberOfElements: number;
    size:             number;
    number:           number;
    sort:             Sort;
    first:            boolean;
    empty:            boolean;
}

export interface Content {
    id:       string;
    name:     string;
    location: string;
    contact:  string;
    vacants:  Vacant[];
}

export interface Vacant {
    id:          number;
    title:       string;
    description: string;
    status:      string;
}

export interface Pageable {
    pageNumber: number;
    pageSize:   number;
    sort:       Sort;
    offset:     number;
    paged:      boolean;
    unpaged:    boolean;
}

export interface Sort {
    sorted:   boolean;
    unsorted: boolean;
    empty:    boolean;
}

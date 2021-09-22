
import React from "react";
import { useState } from "react";
import { info } from "../bio";

export const Ctx = React.createContext<Partial<BioNS.Bio>>({
    name: '',
    lastname: ''
});

export const StoreProvider = (props: any) => {
    const [name] = useState(info.name);
    const [lastname] = useState(info.lastname);

    return (
        <Ctx.Provider value={{ name, lastname }}>
            {props.children}
        </Ctx.Provider>
    )
}
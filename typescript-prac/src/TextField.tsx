import React, {useState, useRef} from 'react'

// With typescript, it becomes far easier to see what props are mandatory in a component, for it will throw warning messages in app js when this component is declared without
// the required props in the the tag. You can also create objects and make them required props as well, to make props optional simply put a '?' in front of the colon

interface Person{
    firstName: string;
    lastName: string;
}

interface Props{
    text: string;
    ok?: boolean;
    i?: number;
    fn?: (bob: string) => string;
    person: Person;
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; 
}

// Typescript will also infer what the type is based on what you used to set initial state (in this case its 5 so if you hover over count it says type is number)

// If typescript fails you, you can use <> tags to declare directly what the types can be after the usestate hook, you can even pass objects into state and typescript will check it

export const TextField: React.FC<Props> = ({handleChange}) => {
    const [count, setCount] = useState<number | null | undefined>(5);
    const inputRef = useRef<HTMLInputElement>(null)
    const divRef = useRef<HTMLInputElement>(null)

    return (
        <div ref={divRef}>
            <input ref={inputRef} onChange={handleChange}/>
        </div>
    )
}

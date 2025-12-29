import Contact from "../Contact"
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'

test("should load heading in conact", ()=>{

render(<Contact/>)

const heading = screen.getAllByRole("heading")
expect(heading.length).toBe(1)

})


test("heading has list items", ()=>{
    render(<Contact/>)

    const nameInput = screen.getByPlaceholderText("enter your name")


        expect(nameInput).toBeInTheDocument()

} ) 
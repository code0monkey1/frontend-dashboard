import Login from "./login.tsx"
import{describe, it, expect} from 'vitest'
import { render,screen } from "@testing-library/react"


describe('login', () => {
    it('should render login page', () => {
        render(<Login/>)
        expect(screen.getByText('Login Page')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('UserName')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()

        expect(screen.getByRole('button',{name:"Log In"})).toBeInTheDocument()
        expect(screen.getByRole('checkbox',{name:"Remember Me"})).toBeInTheDocument()
    })
});
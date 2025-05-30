import Login from "./login.tsx"
import { describe, it, expect } from 'vitest'
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'

describe('login', () => {
  
    it('should render login page', () => {
        render(<Login/>)
        expect(screen.getByText('Sign In')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('User Name')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
        expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument()
        expect(screen.getByRole('checkbox', { name: 'Remember me' })).toBeInTheDocument()
    })
});
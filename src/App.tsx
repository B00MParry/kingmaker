import React from 'react'
import { RecoilRoot } from 'recoil'
import { Home } from './pages/Home'

export default function App() {
	return (
		<RecoilRoot>
			<Home />
		</RecoilRoot>
	)
}
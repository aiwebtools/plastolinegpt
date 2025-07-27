import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'orbitron': ['Orbitron', 'monospace'],
				'exo': ['Exo 2', 'sans-serif'], 
				'space': ['Space Grotesk', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				'neon-cyan': 'hsl(var(--neon-cyan))',
				'neon-pink': 'hsl(var(--neon-pink))',
				'neon-purple': 'hsl(var(--neon-purple))',
				'neon-green': 'hsl(var(--neon-green))',
				'neon-orange': 'hsl(var(--neon-orange))',
				'neon-red': 'hsl(var(--neon-red))',
				'electric-blue': 'hsl(var(--electric-blue))',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'glow-pulse': {
					'0%, 100%': { 
						boxShadow: '0 0 20px hsl(var(--neon-cyan) / 0.5), 0 0 40px hsl(var(--neon-cyan) / 0.3)'
					},
					'50%': { 
						boxShadow: '0 0 30px hsl(var(--neon-cyan) / 0.8), 0 0 60px hsl(var(--neon-cyan) / 0.5)'
					}
				},
				'mega-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 30px hsl(var(--neon-cyan) / 0.8), 0 0 60px hsl(var(--neon-pink) / 0.6), 0 0 90px hsl(var(--neon-purple) / 0.4)'
					},
					'33%': { 
						boxShadow: '0 0 40px hsl(var(--neon-pink) / 0.8), 0 0 70px hsl(var(--neon-purple) / 0.6), 0 0 100px hsl(var(--neon-cyan) / 0.4)'
					},
					'66%': { 
						boxShadow: '0 0 35px hsl(var(--neon-purple) / 0.8), 0 0 65px hsl(var(--neon-cyan) / 0.6), 0 0 95px hsl(var(--neon-pink) / 0.4)'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'matrix-rain': {
					'0%': { transform: 'translateY(-100vh)' },
					'100%': { transform: 'translateY(100vh)' }
				},
				'cyber-flicker': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				},
				'shooting-star': {
					'0%': { 
						transform: 'translateX(-100vw) translateY(-100vh) rotate(45deg)',
						opacity: '0'
					},
					'10%': { opacity: '1' },
					'90%': { opacity: '1' },
					'100%': { 
						transform: 'translateX(100vw) translateY(100vh) rotate(45deg)',
						opacity: '0'
					}
				},
				'twinkle': {
					'0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
					'50%': { opacity: '1', transform: 'scale(1.2)' }
				},
				'drift': {
					'0%': { transform: 'translateX(0) translateY(0)' },
					'25%': { transform: 'translateX(10px) translateY(-10px)' },
					'50%': { transform: 'translateX(-5px) translateY(-20px)' },
					'75%': { transform: 'translateX(-10px) translateY(-10px)' },
					'100%': { transform: 'translateX(0) translateY(0)' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						filter: 'brightness(1) saturate(1)',
						transform: 'scale(1)'
					},
					'50%': { 
						filter: 'brightness(1.3) saturate(1.5)',
						transform: 'scale(1.05)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'mega-glow': 'mega-glow 3s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
				'matrix-rain': 'matrix-rain 20s linear infinite',
				'cyber-flicker': 'cyber-flicker 0.1s ease-in-out infinite',
				'shooting-star': 'shooting-star 3s linear infinite',
				'twinkle': 'twinkle 2s ease-in-out infinite',
				'drift': 'drift 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

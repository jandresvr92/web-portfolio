import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		opacity: Object.fromEntries(Array.from({ length: 101 }, (_, i) => [i, `${i / 100}`])),
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			neon: 'hsl(var(--neon) / <alpha-value>)',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		fontFamily: {
  			heading: ['var(--font-heading)'],
  			body: ['var(--font-body)'],
  			display: ['var(--font-display)'],
  			mono: ['var(--font-mono)']
  		},
  		boxShadow: {
  			neon: '0 0 24px hsl(var(--neon) / 0.45), 0 0 2px hsl(var(--neon) / 0.9)',
  			'neon-lg': '0 0 60px hsl(var(--neon) / 0.55), 0 0 140px hsl(var(--neon) / 0.25)',
  			'neon-soft': '0 0 50px hsl(var(--neon) / 0.35)'
  		},
  		dropShadow: {
  			holo: '0 0 9px hsl(var(--neon) / 0.5), 0 0 2px hsl(var(--neon) / 0.55)',
  			'holo-strong': '0 0 18px hsl(var(--neon) / 0.95), 0 0 4px hsl(var(--neon) / 0.85)'
  		},
  		keyframes: {
  			'core-pulse': {
  				'0%': { transform: 'scale(0.85)', opacity: '0.65' },
  				'70%': { transform: 'scale(1.75)', opacity: '0' },
  				'100%': { transform: 'scale(1.75)', opacity: '0' }
  			},
  			'boot-caret': {
  				'0%, 49%': { opacity: '1' },
  				'50%, 100%': { opacity: '0' }
  			},
  			'data-flow': {
  				'0%': { backgroundPosition: '0 0' },
  				'100%': { backgroundPosition: '26px 0' }
  			},
  			'data-packet': {
  				'0%': { transform: 'translateX(0px)', opacity: '0' },
  				'8%': { opacity: '1' },
  				'82%': { opacity: '1' },
  				'100%': { transform: 'translateX(var(--len))', opacity: '0' }
  			},
  			'panel-in': {
  				'0%': { opacity: '0', transform: 'translateX(28px)' },
  				'100%': { opacity: '1', transform: 'translateX(0)' }
  			},
  			'holo-float': {
  				'0%, 100%': { transform: 'translateY(0px)' },
  				'50%': { transform: 'translateY(-7px)' }
  			},
  			'unlock-in': {
  				'0%': { opacity: '0', transform: 'translateY(14px) scale(0.97)' },
  				'100%': { opacity: '1', transform: 'translateY(0) scale(1)' }
  			},
  			'led-blink': {
  				'0%, 7%, 9%, 26%, 30%, 64%, 68%, 100%': { opacity: '1' },
  				'8%, 28%, 66%': { opacity: '0.12' }
  			},
  			'load-fluct': {
  				'0%': { transform: 'scaleX(0.34)' },
  				'18%': { transform: 'scaleX(0.72)' },
  				'32%': { transform: 'scaleX(0.51)' },
  				'47%': { transform: 'scaleX(0.88)' },
  				'61%': { transform: 'scaleX(0.63)' },
  				'76%': { transform: 'scaleX(0.96)' },
  				'88%': { transform: 'scaleX(0.45)' },
  				'100%': { transform: 'scaleX(0.34)' }
  			},
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
  			}
  		},
  		animation: {
  			'core-pulse': 'core-pulse 1.8s ease-out infinite',
  			'boot-caret': 'boot-caret 1s steps(1) infinite',
  			'data-flow': 'data-flow 1.3s linear infinite',
  			'data-packet': 'data-packet 3.2s linear infinite',
  			'panel-in': 'panel-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) both',
  			'holo-float': 'holo-float 3.4s ease-in-out infinite',
  			'unlock-in': 'unlock-in 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
  			'led-blink': 'led-blink 2.6s steps(1, end) infinite',
  			'load-fluct': 'load-fluct 3.4s ease-in-out infinite',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [animate],
}

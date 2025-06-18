# IoT Centre of Excellence Website

## Overview
This is the official website for the IoT Centre of Excellence at SISTec, showcasing our initiatives, events, team members, and featuring an AI-powered chatbot assistant. The website is built using modern web technologies and provides an interactive platform for students and visitors to learn about our IoT and robotics programs.

## Tech Stack
- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: Lucide React, React Icons
- **AI Integration**: Google's Generative AI (Gemini)
- **Other Features**: Swiper for carousels

## Key Features
- Responsive design with modern UI/UX
- Interactive AI Chatbot (IoTbot)
- Event showcase and registration
- Team member profiles
- Initiative highlights
- Contact information

## Project Structure
```
src/
├── components/      # Reusable UI components
├── pages/          # Main page components
├── assets/         # Static assets
└── styles/         # CSS styles
```

## ChatBot Setup
The website features an AI-powered chatbot that uses Google's Gemini API. To set up the chatbot:

1. Get an API key from Google AI Studio (https://aistudio.google.com/app/apikey)

2. Create a `.env` file in the root directory:
```env
VITE_GEMINI_API_KEY=your_api_key_here
```

3. The chatbot is configured with:
- Model: gemini-2.5-flash-lite-preview-06-17
- Rate limiting: 10-second cooldown between requests
- Maximum output tokens: 1000
- System prompt for IoT and robotics domain expertise

## Development Setup

1. Install dependencies:
```bash
pnpm install
```

2. Start development server:
```bash
pnpm dev
```

3. For production build:
```bash
pnpm build
```

4. Preview production build:
```bash
pnpm preview
```

## Linting
```bash
pnpm lint
```

## Environment Requirements
- Node.js (Latest LTS recommended)
- pnpm v9.12.2 or higher
- Modern web browser with JavaScript enabled

## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## Contact Information
SISTec IoT Centre of Excellence
- Admissions: +91 91099 75760, admissions@sistec.ac.in
- General Inquiries: +91 73896 09155
- Placements: grouphead.crm@sistec.ac.in

## Campus Locations
1. Gandhi Nagar Campus:
   - Opposite International Airport, Bhopal, Madhya Pradesh, 462036
2. Ratibad Campus:
   - Sikandrabad, Near Ratibad, Bhadbhada Road, Bhopal, Madhya Pradesh, 462044

## License
This project is private and proprietary. All rights reserved.

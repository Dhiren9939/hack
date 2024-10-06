import { Link, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Linkedin, FileText, Video, Edit3, Users, MessageSquare, Calendar, Lock } from "lucide-react"

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-800">
        <Link to="/" className="flex items-center justify-center">
          <span className="sr-only">WorkSpace</span>
          <span className="font-bold text-2xl text-teal-400">WorkSpace</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link to="#about" className="text-sm font-medium hover:text-teal-400 transition-colors">
            About Us
          </Link>
          <Button variant="outline" className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-gray-900" onClick={()=>{
            navigate("/sign");
          }}>
  
            Login / Sign Up

          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-6">
              Welcome to <span className="text-teal-400">WorkSpace</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl mb-12">
              Empowering teams with innovative collaboration tools
            </p>
            <div className="space-x-4">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white" onClick={()=>{
                navigate('/login')
              }}>Get Started</Button>
              <Button variant="outline" className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-gray-900">
                Learn More
              </Button>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Our Features</h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="p-4 bg-teal-500 rounded-full">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">Project Management Tools</h3>
                <p className="text-gray-400">Streamline your workflow with our intuitive project management suite.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="p-4 bg-teal-500 rounded-full">
                  <Video className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">Video Conferencing Integration</h3>
                <p className="text-gray-400">Connect with your team face-to-face, no matter where they are.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="p-4 bg-teal-500 rounded-full">
                  <Edit3 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">Shared Document Editing</h3>
                <p className="text-gray-400">Collaborate in real-time on documents, spreadsheets, and presentations.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="p-4 bg-teal-500 rounded-full">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">Team-Building Activities</h3>
                <p className="text-gray-400">Foster a strong team culture with our built-in team-building tools.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">What Our Customers Say</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  quote: "This platform has revolutionized how our team collaborates. It's a game-changer!",
                  author: "Jane Doe",
                  role: "CEO, TechCorp"
                },
                {
                  quote: "The features are intuitive and have significantly boosted our productivity.",
                  author: "John Smith",
                  role: "Project Manager, InnovateCo"
                },
                {
                  quote: "Customer support is top-notch. They're always there when we need them.",
                  author: "Emily Brown",
                  role: "CTO, StartupX"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg">
                  <p className="text-lg mb-4">"{testimonial.quote}"</p>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-teal-400">{testimonial.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Collaboration Features</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  name: "Real-Time Communication",
                  icon: <MessageSquare className="h-8 w-8 text-teal-400" />,
                  description: "Stay connected with your team through instant messaging, voice calls, and video conferences.",
                  features: [
                    "Instant messaging with threaded conversations",
                    "HD video and audio calls",
                    "Screen sharing and collaborative whiteboarding",
                    "Integrated file sharing within chats"
                  ]
                },
                {
                  name: "Project Coordination",
                  icon: <Calendar className="h-8 w-8 text-teal-400" />,
                  description: "Manage projects efficiently with our comprehensive suite of planning and tracking tools.",
                  features: [
                    "Interactive Gantt charts and Kanban boards",
                    "Task assignment and progress tracking",
                    "Time tracking and reporting",
                    "Customizable project templates"
                  ]
                },
                {
                  name: "Secure File Management",
                  icon: <Lock className="h-8 w-8 text-teal-400" />,
                  description: "Keep your files organized, accessible, and secure with our advanced file management system.",
                  features: [
                    "Cloud storage with version control",
                    "Granular access permissions",
                    "Automatic file backup and recovery",
                    "Integration with popular cloud storage services"
                  ]
                }
              ].map((feature, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-lg flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-2xl font-bold ml-2">{feature.name}</h3>
                  </div>
                  <p className="text-gray-400 mb-6">{feature.description}</p>
                  <ul className="mb-6 flex-grow">
                    {feature.features.map((item, fIndex) => (
                      <li key={fIndex} className="flex items-center mb-2">
                        <div className="mr-2 w-1 h-1 bg-teal-400 rounded-full"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white mt-auto">Get Started</Button>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">Ready to Get Started?</h2>
            <p className="mx-auto max-w-[700px] text-xl mb-8">
              Join thousands of teams already using our platform to boost their productivity and collaboration.
            </p>
            <Button className="bg-white text-teal-600 hover:bg-gray-100">Sign Up Now</Button>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 px-4 bg-gray-800 border-t border-gray-700">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <p className="text-sm text-gray-400">© 2024 Company. All rights reserved.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <nav className="flex flex-col space-y-2">
                <Link to="/privacy" className="text-sm text-gray-400 hover:text-teal-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-sm text-gray-400 hover:text-teal-400 transition-colors">
                  Terms of Service
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
               
          
                <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
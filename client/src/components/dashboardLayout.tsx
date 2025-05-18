import { Sidebar } from "./sidebar"
import { Navbar } from "./navbar"
export function DashboardLayout(){
    return(                 
        <div className="h-screen w-full overflow-hidden flex flex-col">
            <Navbar />
            <div className="flex h-full">
                <Sidebar />
                <div className="flex-1 overflow-y-auto font-sans">
                    Main Content
                </div>
            </div>
        </div>
    )
}
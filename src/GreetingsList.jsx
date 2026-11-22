import { GreetingCard } from "./GreetingCard";

export function GreetingsList({ greetings }) {
    return (
        <div>
            {greetings.map((item, index) => (
                <GreetingCard key={index} greeting={item} />
            ))}
        </div>
    );
}
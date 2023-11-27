import { cn } from "@/@utils";

const BusyWidget = ({ boxesClass = "" }: { boxesClass?: string }) => {
    return (<div className="busy-widget">
        <div className={cn('box box1 bg-primary', boxesClass)}></div>
        <div className={cn('box box2 bg-primary', boxesClass)}></div>
        <div className={cn('box box3 bg-primary', boxesClass)}></div>
        <div className={cn('box box4 bg-primary', boxesClass)}></div>
        <div className={cn('box box5 bg-primary', boxesClass)}></div>
        <div className={cn('box box6 bg-primary', boxesClass)}></div>
    </div>
    );
}

export default BusyWidget
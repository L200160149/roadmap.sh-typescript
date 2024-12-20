// (*) Bottom Types
// 1. Never
    // Function returning never must not have a reachable end point
    function error(message: string): never {
        throw new Error(message);
    }
    
    // Inferred return type is never
    function fail() {
        return error('Something failed');
    }
    
    // Function returning never must not have a reachable end point
    function infiniteLoop(): never {
        while (true) {}
    }
function guardrail(mathFunction) {
    queue = [];
    try {
        queue = mathFunction();
    } catch (error) {
        queue.push(error.message);
    } finally {
        queue.push('Guardrail was processed');
    }
    return queue;
}

function selectPlan(planNumber) {
    const plans = document.querySelectorAll("#plan1, #plan2, #plan3")
    plans.forEach(n =>  {
        if (planNumber === n.id) {
        n.classList.add('plan--selected')
        }
        if (planNumber === n.id) {
        n.classList.add('plan--selected')
        }
        if (planNumber === n.id) {
        n.classList.add('plan--selected')
        }
        else {
        n.classList.remove('plan--selected')
        }
    })
}

selectPlan("plan2")
selectPlan("plan1")
selectPlan("plan3")
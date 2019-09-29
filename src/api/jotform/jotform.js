export const loginJotForm = async (username, password) => {
    const response = await fetch(`https://api.jotform.com/user/login?username=${username}&password=${password}&appName=new&access=full`, {
        method: 'POST'
    })
    const raw = await response.json()
    return raw
}

export const formJotform = async (appKey) => {
    const response = await fetch(`https://api.jotform.com/user/forms?version=latest&apiKey=${appKey}&limit=1000`, {
        method: 'GET'
    })
    const raw = await response.json()
    return raw
}

export const questionJotForm = async (flow_id, appKey) => {
    const rawResponse = await fetch(`https://api.jotform.com/form/${flow_id}/questions?apiKey=${appKey}`, {
      method: 'GET'
    });
    const content = await rawResponse.json();
    return content

}

export const submissionJotForm = async (form_id, appKey) => {
    const rawResponse = await fetch(`https://api.jotform.com/form/${form_id}/submissions?version=latest&apiKey=${appKey}`, {
      method: 'GET'
    });
    const content = await rawResponse.json();
    return content
}
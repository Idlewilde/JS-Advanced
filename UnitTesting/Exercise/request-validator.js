function solve(request) {

    let validMethods = ["GET", "POST", "DELETE", "CONNECT"];
    if (request['method'] == undefined) { throw new Error('Invalid request header: Invalid Method') };
    if (!validMethods.includes(request['method'])) { throw new Error('Invalid request header: Invalid Method') };

    let uri = request['uri'];
    if (uri == undefined) { throw new Error('Invalid request header: Invalid URI') };
    let uriAlphaNumeric = true;
    for (let i = 0; i < uri.length; i++) {
        code = uri.charCodeAt(i);
        if (!(code > 47 && code < 58) &&
            !(code > 64 && code < 91) &&
            !(code > 96 && code < 123) &&
            !(code == 46)) {
            uriAlphaNumeric = false;
        }
    }

    if (uri == '*') { uriAlphaNumeric = true; }
    if (uri == "") { uriAlphaNumeric = false; }
    if (!uriAlphaNumeric) { throw new Error('Invalid request header: Invalid URI') }

    if (request['version'] == undefined) { throw new Error('Invalid request header: Invalid Version') }
    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    if (!validVersions.includes(request['version'])) { throw new Error('Invalid request header: Invalid Version') };

    let message = request['message'];
    if (message == undefined) { throw new Error('Invalid request header: Invalid Message') };
    for (let i = 0; i < message.length; i++) {
        code = message.charCodeAt(i);
        if (code == 60 || code == 62 || code == 92 || code == 38 || code == 34 || code == 39) {
            throw new Error('Invalid request header: Invalid Message');
        }
    }

    return request;
}

console.log(solve({
    method: 'GET',
    version: 'HTTP/1.1',
    message: '&'
}
));
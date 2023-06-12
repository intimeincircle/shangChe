function readPackage(pkg, context) {

    if (pkg.devDependencies && pkg.devDependencies['@types/react']) {
        console.log('pkg.devDependencies[\'@types/react\']', pkg.devDependencies['@types/react'])
        pkg.devDependencies['@types/react'] = 'npm:@types/react@17.0.2'
    }
    return pkg
}

module.exports = {
    hooks: {
        readPackage
    }
}
(function solve() {
    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)) {
            return str.concat(this);
        }
        return this.toString();
    }

    String.prototype.ensureEnd = function (str) {
        if (!this.endsWith(str)) {
            return str.concat(this);
        }
        return this.toString();
    }

    String.prototype.isEmpty = function () {
        let length = this.length;
        if (length == 0) { return true; }
        return false;
    }

    String.prototype.truncate = function (n) {
        if (n < 4) {
            return ".".repeat(n);
        }
        if (this.toString().length <= n) {
            return this.toString();
        } else {
            let endIndex = this.toString().substring(0, n - 2).lastIndexOf(" ");
            if (endIndex != -1) {
                return this.toString().substring(0, endIndex) + "...";
            } else {
                return this.toString().substring(0, n - 3) + "...";
            }
        }
    }

    String.format = function (str, ...params) {
        params.forEach((a, b) => {
            str = str.replace(`{${b}}`, a)
        });
        return str;
    }
})()
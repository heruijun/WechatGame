import {Resources} from './Resources.js'

export class ResourceLoader {
    constructor() {
        this.map = new Map(Resources)
        for (let [key, value] of this.map) {
            const image = new Image()
            image.src = value
            this.map.set(key, image)
        }
    }

    onLoaded(callback) {
        let loadedCoount = 0
        for (let value of this.map.values()) {
            value.onload = () => {
                loadedCoount ++
                if(loadedCoount >= this.map.size) {
                    callback(this.map)
                }
            }
        }
    }

    static create() {
        return new ResourceLoader()
    }
}
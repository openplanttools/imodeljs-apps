# PlantSight Data Linker

Copyright © 2019 Bentley Systems, Incorporated. All rights reserved.

## Purpose
* Show PlantSight components and their properties.
* Link PlantSight components with a local Vendor database
* Show PlantSight components, their properties and linked local Vendor database properties.

## Goals

1. Connect to a PlantSight project
2. Query PlantSight components
3. Display queried PlantSight components
4. Connect to local Vender database
5. Select a PlantSight queried component 
    * Show selected PlantSight queried component properties    
6. Select Vender record
7. Link PlantSight queried component and Vender selected record 
    * Store PlantSight queried component ID and Vender selected record ID in Vender database
8. Select PlantSight queried component and if there is a related Vender record:
    * Display queried component properties and Vender data

## Testing

### Unit tests

Run with `npm run test:unit`

## References
See http://imodeljs.org for comprehensive documentation on the iModel.js API and the various constructs used in this sample.

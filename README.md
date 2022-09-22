# Three core concepts
## Cake shop
### Entities
* Shop - Stores cakes on a shelf
* Shopkeeper - Behind the counter
* Customer - At the store entrance

### Activities
* Customer - Order a cake
* Shopkeeper - Box a cake from the shelf
* - Receipt to keep track

# Three core concepts contd.
| Cake Shop Scenario | Redux   | Purpose                             |
|--------------------|---------|-------------------------------------|
| Shop               | Store   | Holds the state of your application |
| Cake ordered       | Action  | Describes what happened             |
| Shopkeeper         | Reducer | Ties the store and actions together |

* A store that holds the state of your application
* An action that describes what happened in the application
* A reducer which handles the action and decides how to update the state



# Tools

https://github.com/openai/gpt-2

```
That night Mom and Dad took Grandpa to the hospital. Two weeks later I stood alone on the lonely prairie of the reservation and put the sacred sage in my medicine bag.
```
Fine-tune gpt-2:
https://minimaxir.com/2019/09/howto-gpt2/

# References

+ Microsoft and OpenAI: https://www.theverge.com/2019/7/22/20703578/microsoft-openai-investment-partnership-1-billion-azure-artificial-general-intelligence-agi



```json
GET /cmn76_info624_201902_wikifilms/_search
{
  "from": 0, "size": 5,
  "query": {
    "bool": {
      "must": { {"term": {"title":"alien"}},
      "should": [
        {"term": {"title":"sci-fi"}},
        {"term": {"title":"war"}}
      ]
      }
    }
  }
}
```
